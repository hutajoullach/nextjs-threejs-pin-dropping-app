import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";

import correctedData from "../constants/correctedData.json";

import GlobeGl, { GlobeMethods, GlobeProps } from "react-globe.gl";
import number from "numeral";
import chroma from "chroma-js";
import axios, { AxiosResponse } from "axios";

const Globe = () => {
  const [hoverD, setHoverD] = useState<object | null>(null);
  const globeEl = useRef<GlobeMethods | undefined>(undefined);

  const [globeData, setGlobeData] = useState({
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
    const fetchData = async () => {
      setLoading(true);

      const sortedData = await correctedData.sort((a, b) =>
        a.countryName.localeCompare(b.countryName)
      );
      console.log(sortedData);
      setData(sortedData);

      axios
        .get(
          "https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson"
        )
        .then((res: AxiosResponse<any>) => {
          console.log(res);
          setGlobeData({
            countries: res.data[0],
            points: res.data[1],
          });
        })
        .catch((err) => {
          console.log(err);
        });
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (globeEl.current !== undefined) {
      const scene = globeEl.current.scene();
      if (scene.children.length === 4) {
        scene.children[1].intensity = 1.5;
        scene.children[2].visible = false;
      }

      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.controls().enableZoom = true;
    }
  }, [globeData]);

  let lookup: any[] = [];

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {!loading && (
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
          labelsData={globeData.points.features}
          labelLat={(d: any) => d.properties.latitude}
          labelLng={(d: any) => d.properties.longitude}
          labelAltitude={(d: any) =>
            d.properties.type === "order" ? 0.015 : 0.013
          }
          labelText={(d) => ""}
          labelSize={(d) => 0.6}
          labelDotRadius={(d) => 0.6}
          labelColor={(d: any) =>
            d.properties.type === "order" ? "#5A68BD" : "#51CB90"
          }
          labelResolution={2}
        />
      )}
    </div>
  );
};

export default Globe;
