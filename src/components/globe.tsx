import { useEffect, useRef, useState } from "react";

import correctedData from "../constants/correctedData.json";

import GlobeGl from "react-globe.gl";
import number from "numeral";
import chroma from "chroma-js";

const Globe = () => {
  const [hoverD, setHoverD] = useState();
  const globeEl = useRef();

  const [globeData, setGlobeData] = useState({
    countries: {
      features: [],
    },
    points: {
      features: [],
    },
  });

  // const [data, setData] = useState([]);
  const [data, setData] = useState(correctedData);

  const [loading, setLoading] = useState(true);
  const colorScale = chroma.scale(["red", "yellow"]);

  if (correctedData) {
    const sortedData = correctedData.sort((a, b) =>
      a.countryName.localeCompare(b.countryName)
    );
    console.log(sortedData);
    setData(sortedData);
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // fetch("./correctedData.json")
        //   .then((response) => response.json())
        //   .then((data) => {
        //     const sortedData = data.sort((a, b) =>
        //       a.countryName.localeCompare(b.countryName)
        //     );
        //     console.log(sortedData);
        //     setData(sortedData);
        //   });

        fetch(
          "https://raw.githubusercontent.com/iamanas20/geojson/main/map11.geojson"
        )
          .then((res) => res.json())
          .then(function (res) {
            console.log(res);
            setGlobeData({
              countries: res[0],
              points: res[1],
            });
          });
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return <div>globe</div>;
};

export default Globe;
