import { useEffect, useRef, useState, useMemo, lazy, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import {
  GeoJsonCollection,
  Feature,
  Properties,
} from "../../types/geo-json-collection";
import { GlobeData } from "../../types/globe-data";
import { IPApiGeocode } from "../../types/ip-api-geocode";
import { WorldHappinessScoreData } from "../../types/world-happiness-score-data";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import theme from "../../styles/styles";
import { categories, emojis, svgicons } from "../../constants";
import worldHappinessScoreData from "../../constants/world-happiness-score-data-2022.json";
import useGeolocationPinGlobe from "~/store/geolocation-pin-globe-store";
import useIPLocation from "../../hooks/use-ip-location";
import useGroupByProximity from "~/hooks/use-group-by-proximity";
import { LoadingSpinner, LoadingPage } from "../loading";
import createHtmlElement from "./create-html-element";
import { createPolygonCapColor, createPolygonLabel } from "./create-polygon";

import axios, { AxiosResponse } from "axios";
import * as THREE from "three";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { FiPlus, FiMinus } from "react-icons/fi";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { GlobeMethods, GlobeProps } from "react-globe.gl";
const GlobeGl = lazy(() => {
  return import("react-globe.gl");
});

type GeolocationPinWithUser =
  RouterOutputs["geolocationPins"]["getAll"][number];
const Globe = ({ jumboIsVisible }: { jumboIsVisible: boolean }) => {
  const user = useUser();

  const { data } = api.geolocationPins.getAll.useQuery();
  const { filteredData, groups: proximityCoordsGroups } = useGroupByProximity(
    data ?? [],
    500
  ); // Group data within 500 km of each

  const [hoverD, setHoverD] = useState<object | null>(null);
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const [zoomLevel, setZoomLevel] = useState(0.7);

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isRootRoute = pathname === "/";

  const [isIpCoordsFetched, setIsIpCoordsFetched] = useState(false);
  const [userLocCoords, setUserLocCoords] = useState<
    IPApiGeocode | undefined
  >();
  const [isGlobeDataFetched, setIsGlobeDataFetched] = useState(false);
  const [globeData, setGlobeData] = useState<GlobeData | undefined>();

  useEffect(() => {
    axios
      .get("/api/ip-data")
      .then((res: AxiosResponse<IPApiGeocode>) => {
        setUserLocCoords(res.data);
        setIsIpCoordsFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("/api/globe")
      .then((res: AxiosResponse<GlobeData>) => {
        setGlobeData(res.data);
        setIsGlobeDataFetched(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [isApiDataFetched, setIsApiDataFetched] = useState(false);
  const [happinessScoreData, setHappinessScoreData] = useState<
    WorldHappinessScoreData[]
  >(worldHappinessScoreData);

  useEffect(() => {
    if (category === "health") {
      const sortedData = worldHappinessScoreData.sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setHappinessScoreData(sortedData);
    }

    setIsApiDataFetched(true);
  }, []);

  // useEffect(() => {
  //   if (globeEl.current && isIpCoordsFetched && userLocCoords) {
  //     if (category === "home") {
  //       globeEl.current.pointOfView({
  //         lat: userLocCoords.lat,
  //         lng: userLocCoords.lon,
  //         altitude: zoomLevel,
  //       });
  //     }

  //     if (category !== "home") {
  //       globeEl.current.pointOfView({
  //         lat: userLocCoords.lat,
  //         lng: userLocCoords.lon,
  //         altitude: 2.5,
  //       });
  //     }
  //   }
  // }, [isIpCoordsFetched, userLocCoords, category]);

  useEffect(() => {
    if (globeEl.current && globeEl.current.scene) {
      const scene = globeEl.current.scene && globeEl.current.scene();
      if (
        scene &&
        Array.isArray(scene.children) &&
        scene.children.length === 4 &&
        scene.children[2]
      ) {
        const pointLight = scene.children[1] as THREE.PointLight;
        pointLight.intensity = 1.5;
        scene.children[2].visible = false;
        sceneRef.current = scene;
      }
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 0.5;
        globeEl.current.controls().enableZoom = true;
      }
    }
  }, [globeData, GlobeGl]);

  const handleZoomClick = (zoom: string) => {
    if (zoom === "zoom-in") {
      setZoomLevel((prev) => {
        const newZoomLevel = prev - 0.1;
        if (globeEl.current) {
          globeEl.current.pointOfView({ altitude: newZoomLevel });
        }
        return newZoomLevel;
      });
    }

    if (zoom === "zoom-out") {
      setZoomLevel((prev) => {
        const newZoomLevel = prev + 0.1;
        if (globeEl.current) {
          globeEl.current.pointOfView({ altitude: newZoomLevel });
        }
        return newZoomLevel;
      });
    }
  };

  if (
    category === "food" ||
    category === "stores" ||
    category === "weather" ||
    category === "wildfire" ||
    category === "tornado" ||
    category === "flood" ||
    category === "volcano" ||
    category === "traffic"
  )
    return (
      <div className="text-slate-100">
        scaffolding... come back later 🚧🏗️👷‍♂️
      </div>
    );

  if (!data) return <div className="text-slate-100">something went wrong</div>;
  if (
    !isApiDataFetched ||
    globeData?.countries.features === undefined ||
    globeData?.countries.features === null ||
    globeData?.countries.features.length === 0 ||
    !Array.isArray(globeData?.countries.features) ||
    globeData?.points.features === undefined ||
    globeData?.points.features === null ||
    globeData?.points.features.length === 0 ||
    !Array.isArray(globeData?.points.features)
  ) {
    return <div className="text-slate-100">Fetching data</div>;
  }

  return (
    <div className={`${theme.h.contentShrunkWithCb} flex`}>
      {isApiDataFetched && isGlobeDataFetched && (
        <>
          <Suspense fallback={<LoadingPage />}>
            <GlobeGl
              ref={globeEl}
              backgroundColor="#F6F7FB"
              globeImageUrl={
                category === null
                  ? "//unpkg.com/three-globe/example/img/earth-night.jpg"
                  : "//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              }
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              showAtmosphere={true}
              polygonsData={
                category === "health" ? globeData.countries.features : undefined
              }
              polygonStrokeColor={() => "#A4B0BB"}
              polygonSideColor={() => "rgba(222,225,228,.6)"}
              onPolygonHover={setHoverD}
              polygonCapColor={(d: object) =>
                createPolygonCapColor(d, category, happinessScoreData)
              }
              polygonLabel={(d: object) =>
                createPolygonLabel(d, category, happinessScoreData)
              }
              labelsData={
                category === "health" ? globeData.points.features : undefined
              }
              labelLat={(d: object) =>
                (d as Feature<number>).properties.latitude || 0
              }
              labelLng={(d: object) =>
                (d as Feature<number>).properties.longitude || 0
              }
              labelAltitude={(d: object) =>
                (d as Feature<number>).properties.type === "order"
                  ? 0.015
                  : 0.013
              }
              labelText={(d) => ""}
              labelSize={(d) => 0.6}
              labelDotRadius={(d) => 0.6}
              labelColor={(d: object) =>
                (d as Feature<number>).properties.type === "order"
                  ? "#5A68BD"
                  : "#51CB90"
              }
              labelResolution={2}
              htmlElementsData={filteredData}
              htmlElement={(d: object) =>
                createHtmlElement(d as GeolocationPinWithUser, category)
              }
              htmlLat={(d: object) =>
                parseFloat((d as GeolocationPinWithUser).geolocationPin.lat)
              }
              htmlLng={(d: object) =>
                parseFloat((d as GeolocationPinWithUser).geolocationPin.lon)
              }
            />
          </Suspense>

          <div className="fixed bottom-5 left-5 z-10 opacity-100 transition-opacity duration-500">
            <div
              className={`mb-1 rounded-sm bg-slate-700 px-1 pt-1 transition hover:opacity-80
              ${jumboIsVisible ? "" : "opacity-0"}
            `}
            >
              <FiPlus
                onClick={() => handleZoomClick("zoom-in")}
                color="white"
                size={22}
              />
            </div>
            <div
              className={`rounded-sm bg-slate-700 px-1 pt-1 transition hover:opacity-80
              ${jumboIsVisible ? "" : "opacity-0"}
            `}
            >
              <FiMinus
                onClick={() => handleZoomClick("zoom-out")}
                color="white"
                size={22}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Globe;
