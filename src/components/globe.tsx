import { useEffect, useRef, useState, Suspense } from "react";

import correctedData from "../constants/correctedData.json";
import { LoadingSpinner } from "./loading";

import GlobeGl, { GlobeMethods, GlobeProps } from "react-globe.gl";
import number from "numeral";
import chroma from "chroma-js";
import axios, { AxiosResponse } from "axios";
import type { GeoJSON } from "geojson";

import * as THREE from "three";

const Globe = () => {
  const [hoverD, setHoverD] = useState<object | null>(null);
  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  const sceneRef = useRef<THREE.Scene | null>(null);

  interface GlobeData {
    countries: {
      features: object[];
    };
    points: {
      features: object[];
    };
  }

  const [globeData, setGlobeData] = useState<GlobeData>({
    countries: {
      features: [],
    },
    points: {
      features: [],
    },
  });

  const [data, setData] = useState(correctedData);

  const [loading, setLoading] = useState(true);
  const colorScale = chroma.scale(["red", "yellow"]);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);

      const sortedData = correctedData.sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      setData(sortedData);

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
      }
    }
  }, [globeData]);

  // let lookup: any[] = [];

  if (loading) return <div>Loading...</div>;

  if (
    globeData.countries.features === undefined ||
    globeData.countries.features === null ||
    globeData.countries.features.length === 0 ||
    !Array.isArray(globeData.countries.features) ||
    globeData.points.features === undefined ||
    globeData.points.features === null ||
    globeData.points.features.length === 0 ||
    !Array.isArray(globeData.points.features)
  ) {
    return <div>Fetching data</div>;
  }

  return (
    <div>
      {!loading && (
        <Suspense fallback={<LoadingSpinner />}>
          <GlobeGl
            ref={globeEl}
            backgroundColor="#F6F7FB"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
            backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
            showAtmosphere={true}
            polygonsData={globeData.countries.features}
            polygonStrokeColor={() => "#A4B0BB"}
            polygonSideColor={() => "rgba(222,225,228,.6)"}
            onPolygonHover={setHoverD}
            // polygonCapColor={function ({ properties: d }: any) {
            //   for (let i = 0, len = data.length; i < len; i++) {
            //     lookup[data?[i].countryName] = data[i];
            //   }
            //   return colorScale(lookup[d.ADMIN]?.happinessScore * 0.1)
            //     .brighten(0.5)
            //     .hex();
            // }}
            // polygonLabel={function ({ properties: d }) {
            //   for (let i = 0, len = data.length; i < len; i++) {
            //     lookup[data[i].countryName] = data[i];
            //   }

            //   return `
            //           <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #fff;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px; text-align: left;">
            //           <div style="font-family: 'Open sans', sans-serif; margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
            //               ${d.ADMIN}
            //           </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   Visitors: ${number(d.POP_EST).format("0a")}
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   Happiness Score: ${lookup[d.ADMIN]?.happinessScore}
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   Happiness Rank: ${lookup[d.ADMIN]?.happinessRank}
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   Life Expectancy: ${
            //                     lookup[d.ADMIN]?.healthLifeExpectancy
            //                   }
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   Generosity: ${lookup[d.ADMIN]?.generosity}
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   Freedom: ${lookup[d.ADMIN]?.freedom}
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   TrustGovernmentCorruption: ${
            //                     lookup[d.ADMIN]?.trustGovernmentCorruption
            //                   }
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   DystopiaResidual: ${
            //                     lookup[d.ADMIN]?.dystopiaResidual
            //                   }
            //               </div>
            //               <div style="font-family: 'Open sans', sans-serif;font-size: 13px;line-height: 16px;color: #3E4850;">
            //                   DataYear: ${lookup[d.ADMIN]?.year}
            //               </div>

            //           </div>
            //       `;
            // }}
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
          />
        </Suspense>
      )}
    </div>
  );
};

export default Globe;

export interface GeoJsonCollection<T> {
  type: string;
  features: Feature<T>[];
  bbox: number[];
  [Symbol.iterator](): IterableIterator<Feature<T>>;
}

export interface Feature<T> {
  type: string;
  properties: Properties<T>;
  bbox: number[];
  geometry: Geometry;
  [Symbol.iterator](): IterableIterator<T>;
}

export interface Properties<T> {
  ADMIN?: string;
  POP_EST?: number;
  type?: string;
  latitude?: T;
  longitude?: T;
}

export interface Geometry {
  type: string;
  coordinates: any[];
}
