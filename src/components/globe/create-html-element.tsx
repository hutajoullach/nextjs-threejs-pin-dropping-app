import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";

import { categories, emojis, svgicons } from "../../constants";

type GeolocationPinWithUser =
  RouterOutputs["geolocationPins"]["getAll"][number];
const createHtmlElement = (
  obj: GeolocationPinWithUser,
  category: string | null
): HTMLElement => {
  const { geolocationPin, user } = obj;

  if (category !== "home") return document.createElement("div");

  let markerIcon = "";
  if (geolocationPin.icontype === "emoji") {
    emojis.map((emoji) => {
      if (emoji.label === geolocationPin.emoji) {
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

export default createHtmlElement;
