import { useEffect, useRef, useState, useMemo, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import theme from "../../styles/styles";
import useGeolocationPinGlobe from "~/store/geolocationPinGlobeStore";
import { categories, emojis, svgicons } from "../../constants";
import worldHappinessScoreData from "../../constants/world-happiness-score-data-2022.json";
import { LoadingSpinner } from "../loading";

import {
  GeoJsonCollection,
  Feature,
  Properties,
} from "../../types/geo-json-collection";
import { GlobeData } from "../../types/globe-data";
import { Lookup } from "../../types/lookup";
import { WorldHappinessScoreData } from "../../types/world-happiness-score-data";

import number from "numeral";
import chroma from "chroma-js";
import axios, { AxiosResponse } from "axios";
import * as THREE from "three";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

import { GlobeMethods, GlobeProps } from "react-globe.gl";
const GlobeGl = dynamic(
  () => {
    return import("react-globe.gl");
  },
  { ssr: false }
);

const Globe = () => {
  const user = useUser();

  const { data } = api.geolocationPins.getAll.useQuery();

  const [hoverD, setHoverD] = useState<object | null>(null);
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const sceneRef = useRef<THREE.Scene | null>(null);

  const geolocationPinGlobe = useGeolocationPinGlobe();

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  let lookup: Lookup[] = [];

  const [globeData, setGlobeData] = useState<GlobeData>({
    countries: {
      features: [],
    },
    points: {
      features: [],
    },
  });

  const [happinessScoreData, setHappinessScoreData] = useState<
    WorldHappinessScoreData[]
  >(worldHappinessScoreData);

  const [loading, setLoading] = useState(true);
  const colorScale = chroma.scale(["red", "yellow"]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      const sortedData = worldHappinessScoreData.sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setHappinessScoreData(sortedData);

      axios
        .get<GeoJsonCollection<object>[]>(
          "https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson"
        )
        .then((res: AxiosResponse<GeoJsonCollection<object>[]>) => {
          if (
            Array.isArray(res.data) &&
            res.data[0] !== undefined &&
            res.data[1] !== undefined
          ) {
            setGlobeData({
              countries: { features: res.data[0].features },
              points: { features: res.data[1].features },
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });

      setLoading(false);
    };

    fetchData();
  }, []);

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

        // aim at position of current user ip address with zoom
        globeEl.current.pointOfView({ lat: 39.6, lng: -98.5, altitude: 2 });
      }
    }
  }, [globeData]);

  const polygonCapColor = (obj: object) => {
    const d = obj as Feature<string>;

    if (category !== "health") return "#FF7F7F";

    if (lookup === undefined || lookup.length == 0) {
      (happinessScoreData as WorldHappinessScoreData[]).forEach((d) => {
        const countryData = { [d.countryName]: d };
        lookup.push(countryData);
      });
    }

    let lookedUpCountryData;
    for (const object of lookup) {
      for (const key in object) {
        if (key === d?.properties?.ADMIN) {
          lookedUpCountryData = object[key];
        }
      }
    }

    if (typeof lookedUpCountryData === "undefined") return "";

    return colorScale(parseInt(lookedUpCountryData?.happinessScore) * 0.1)
      .brighten(0.5)
      .hex();
  };

  const polygonLabel = (obj: object) => {
    const d = obj as Feature<string>;

    if (category !== "health") return "";

    if (lookup === undefined || lookup.length == 0) {
      (happinessScoreData as WorldHappinessScoreData[]).forEach((d) => {
        const countryData = { [d.countryName]: d };
        lookup.push(countryData);
      });
    }

    let lookedUpCountryData;
    for (const object of lookup) {
      for (const key in object) {
        if (key === d?.properties?.ADMIN) {
          lookedUpCountryData = object[key];
        }
      }
    }

    return `
            <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #fff;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px; text-align: left;">
            <div style="font-family: 'Open sans', sans-serif; margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
                ${d?.properties?.ADMIN}
            </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    Visitors: ${number(d?.properties?.POP_EST).format("0a")}
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    Happiness Score: ${lookedUpCountryData?.happinessScore}
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    Happiness Rank: ${lookedUpCountryData?.happinessRank}
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    Life Expectancy: ${
                      lookedUpCountryData?.healthLifeExpectancy
                    }
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    Generosity: ${lookedUpCountryData?.generosity}
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    Freedom: ${lookedUpCountryData?.freedom}
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    TrustGovernmentCorruption: ${
                      lookedUpCountryData?.trustGovernmentCorruption
                    }
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    DystopiaResidual: ${lookedUpCountryData?.dystopiaResidual}
                </div>
                <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
                    DataYear: ${lookedUpCountryData?.year}
                </div>

            </div>
        `;
  };

  type GeolocationPinWithUser =
    RouterOutputs["geolocationPins"]["getAll"][number];
  const htmlElement = (obj: object) => {
    const { geolocationPin, user } = obj as GeolocationPinWithUser;

    if (category !== "home") return document.createElement("div");

    let markerIcon = "";
    if (geolocationPin.icontype === "emoji") {
      emojis.map((emoji) => {
        if (emoji.label === geolocationPin.emoji) {
          // markerIcon = `<span>&#x${emoji.unicode.slice(2)}</span>`;
          markerIcon = `&#x${emoji.unicode.slice(2)}`;
        }
      });
    }

    if (geolocationPin.icontype === "svg") {
      svgicons.map((svgicon) => {
        if (svgicon.label === geolocationPin.svgicon) {
          markerIcon = svgicon.stringifiedSvg;
        }
      });
    }

    // HTMLElement only, JSX.Element cannot be returned.
    const el = document.createElement("div");
    // unable to attach svg with appendChild
    el.innerHTML = markerIcon;
    if (geolocationPin.icontype === "svg") {
      el.style.fill = geolocationPin.svgiconcolor;
    }
    el.style.width = "20px";
    el.style.pointerEvents = "auto";
    el.style.cursor = "pointer";
    el.onclick = () => console.info("you clicked!");
    return el;
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
    loading ||
    globeData.countries.features === undefined ||
    globeData.countries.features === null ||
    globeData.countries.features.length === 0 ||
    !Array.isArray(globeData.countries.features) ||
    globeData.points.features === undefined ||
    globeData.points.features === null ||
    globeData.points.features.length === 0 ||
    !Array.isArray(globeData.points.features)
  ) {
    return <div className="text-slate-100">Fetching data</div>;
  }

  return (
    <div className={`${theme.h.contentShrunkWithCb} flex`}>
      {!loading && (
        <Suspense fallback={<LoadingSpinner />}>
          <GlobeGl
            ref={globeEl}
            backgroundColor="#F6F7FB"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            // update canvas width on screen width change
            // width={1000}
            // height={600}
            showAtmosphere={true}
            polygonsData={globeData.countries.features}
            polygonStrokeColor={() => "#A4B0BB"}
            polygonSideColor={() => "rgba(222,225,228,.6)"}
            onPolygonHover={setHoverD}
            polygonCapColor={polygonCapColor}
            polygonLabel={polygonLabel}
            labelsData={globeData.points.features}
            labelLat={(d: object) =>
              (d as Feature<number>).properties.latitude || 0
            }
            labelLng={(d: object) =>
              (d as Feature<number>).properties.longitude || 0
            }
            labelAltitude={(d: object) =>
              (d as Feature<number>).properties.type === "order" ? 0.015 : 0.013
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
            htmlElementsData={data}
            htmlElement={htmlElement}
            htmlLat={(d: object) =>
              parseFloat((d as GeolocationPinWithUser).geolocationPin.lat)
            }
            htmlLng={(d: object) =>
              parseFloat((d as GeolocationPinWithUser).geolocationPin.lon)
            }
          />
        </Suspense>
      )}
    </div>
  );
};

export default Globe;
