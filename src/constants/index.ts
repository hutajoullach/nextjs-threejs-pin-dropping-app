import { GoFlame } from "react-icons/go";
import {
  GiHouse,
  GiHearts,
  GiForkKnifeSpoon,
  GiShoppingBag,
  GiSunCloud,
  GiTwister,
  GiFlood,
  GiSmokingVolcano,
  GiTrafficCone,
  GiOldMicrophone,
  GiVideoCamera,
  GiVideoConference,
  GiProgression,
  GiEarthCrack,
  GiCardboardBoxClosed,
  GiPathDistance,
  GiUnstableProjectile,
  GiShoppingCart,
  GiUmbrellaBayonet,
  GiSpaceSuit,
  GiSpaceShuttle,
  GiUmbrella,
  GiTrebuchet,
  GiCommercialAirplane,
  GiBulletBill,
  GiJumpingDog,
  GiCat,
} from "react-icons/gi";

import {
  FaGhost,
  FaEarlybirds,
  FaGithub,
  FaGrav,
  FaOctopusDeploy,
  FaOptinMonster,
  FaThemeisle,
  FaCrow,
  FaFighterJet,
  FaFish,
  FaFrog,
  FaHippo,
  FaRegFlushed,
  FaRegGrinStars,
  FaRegGrinSquintTears,
} from "react-icons/fa";

import {
  stringifiedFaGhost,
  stringifiedFaEarlybirds,
  stringifiedFaGithub,
  stringifiedFaGrav,
  stringifiedFaOctopusDeploy,
  stringifiedFaOptinMonster,
  stringifiedFaThemeisle,
  stringifiedFaCrow,
  stringifiedFaFighterJet,
  stringifiedFaFish,
  stringifiedFaFrog,
  stringifiedFaHippo,
  stringifiedFaRegFlushed,
  stringifiedFaRegGrinStars,
  stringifiedFaRegGrinSquintTears,
} from "./svg-icon";

import { IconType } from "react-icons";

export const searchTab = {
  left: {
    name: "hotspot",
    title: "Side Hustle Ideas",
    desc: "show active stat, like count for event and game, or setup geoloc based tel conference!",
  },
  center: {
    name: "global api",
    title: "Cool APIs",
    desc: "try out cool APIs and pin it on globe!",
  },
  right: {
    name: "explore",
    title: "API docs",
    desc: "check out docs here and fetch some data!",
  },
};

export const hotspotSearchMenuList = [
  {
    id: "Twitch API",
    title: "Twitch API",
    icon: GiOldMicrophone,
    url: "https://dev.twitch.tv/docs/api/",
  },
  {
    id: "YouTube Data",
    title: "YouTube Data",
    icon: GiVideoCamera,
    url: "https://developers.google.com/youtube/v3/",
  },
  {
    id: "Parcel Tracking",
    title: "Parcel Tracking",
    icon: GiCardboardBoxClosed,
    url: "https://developer.dhl.com/",
  },
  {
    id: "Zoom",
    title: "Zoom",
    icon: GiVideoConference,
    url: "https://developers.zoom.us/docs/",
  },
  {
    id: "Market Sentiment",
    title: "Market Sentiment",
    icon: GiProgression,
    url: "https://polygon.io/",
  },
  {
    id: "Donation Camp",
    title: "Donation Camp",
    icon: GiEarthCrack,
    url: "https://www.aerisweather.com/support/docs/api/reference/endpoints/earthquakes/",
  },
];

export const globalApiSearchMenuList = [
  {
    id: "Open Weather",
    title: "Open Weather",
    icon: GiUmbrellaBayonet,
    url: "https://openweathermap.org/api",
  },
  {
    id: "SpaceX API",
    title: "SpaceX API",
    icon: GiSpaceSuit,
    url: "https://github.com/r-spacex/SpaceX-API",
  },
  {
    id: "NASA APIs",
    title: "NASA APIs",
    icon: GiSpaceShuttle,
    url: "https://api.nasa.gov/",
  },
  {
    id: "aviationstack",
    title: "aviationstack",
    icon: GiCommercialAirplane,
    url: "https://aviationstack.com/",
  },
  {
    id: "Polygon.io",
    title: "Polygon.io",
    icon: GiTrebuchet,
    url: "https://polygon.io/",
  },
  {
    id: "PokeApi",
    title: "PokeApi",
    icon: GiBulletBill,
    url: "https://pokeapi.co/",
  },
];

export const exploreSearchMenuList = [
  {
    id: "REST Countries",
    title: "REST Countries",
    icon: GiPathDistance,
    url: "https://restcountries.com/",
  },
  {
    id: "Weather API",
    title: "Weather API",
    icon: GiUmbrella,
    url: "https://openweathermap.org/api",
  },
  {
    id: "EONET",
    title: "EONET",
    icon: GiUnstableProjectile,
    url: "https://eonet.gsfc.nasa.gov/docs/v2.1",
  },
  {
    id: "Polygon.io",
    title: "Polygon.io",
    icon: GiShoppingCart,
    url: "https://polygon.io/docs/stocks/getting-started",
  },
  {
    id: "The Dog API",
    title: "The Dog API",
    icon: GiJumpingDog,
    url: "https://portal.thatapicompany.com/pages/dog-api",
  },
  {
    id: "The Cat API",
    title: "The Cat API",
    icon: GiCat,
    url: "https://portal.thatapicompany.com/pages/cat-api",
  },
];

type Category = {
  id: string;
  label: string;
  icon: IconType;
  description: string;
};

export const categories: Category[] = [
  {
    id: "home",
    label: "home",
    icon: GiHouse,
    description: "description",
  },
  {
    id: "health",
    label: "health",
    icon: GiHearts,
    description: "description",
  },
  {
    id: "food",
    label: "food",
    icon: GiForkKnifeSpoon,
    description: "description",
  },
  {
    id: "stores",
    label: "stores",
    icon: GiShoppingBag,
    description: "description",
  },
  {
    id: "weather",
    label: "weather",
    icon: GiSunCloud,
    description: "description",
  },
  {
    id: "wildfire",
    label: "wildfire",
    icon: GoFlame,
    description: "description",
  },
  {
    id: "tornado",
    label: "tornado",
    icon: GiTwister,
    description: "description",
  },
  {
    id: "flood",
    label: "flood",
    icon: GiFlood,
    description: "description",
  },
  {
    id: "volcano",
    label: "volcano",
    icon: GiSmokingVolcano,
    description: "description",
  },
  {
    id: "traffic",
    label: "traffic",
    icon: GiTrafficCone,
    description: "description",
  },
];

type Emoji = {
  id: string;
  label: string;
  emoji: string;
  unicode: string;
};

export const emojis: Emoji[] = [
  {
    id: "slightly_smiling_face",
    label: "Slightly Smiling Face",
    emoji: "🙂",
    unicode: "U+1F642",
  },
  {
    id: "rofl",
    label: "ROFL",
    emoji: "🤣",
    unicode: "U+1F923",
  },
  {
    id: "melting_face",
    label: "Melting Face",
    emoji: "🫠",
    unicode: "U+1FAE0",
  },
  {
    id: "doggo",
    label: "Doggo",
    emoji: "🐕",
    unicode: "U+1F415",
  },
  {
    id: "cat",
    label: "Cat",
    emoji: "🐈",
    unicode: "U+1F408",
  },
  {
    id: "raccoon",
    label: "Raccoon",
    emoji: "🦝",
    unicode: "U+1F99D",
  },
  {
    id: "zebra",
    label: "Zebra",
    emoji: "🦓",
    unicode: "U+1F993",
  },
  {
    id: "kangaroo",
    label: "Kangaroo",
    emoji: "🦘",
    unicode: "U+1F998",
  },
  {
    id: "rooster",
    label: "Rooster",
    emoji: "🐓",
    unicode: "U+1F413",
  },
  {
    id: "dodo",
    label: "Dodo",
    emoji: "🦤",
    unicode: "U+1F9A4",
  },
  {
    id: "flamingo",
    label: "Flamingo",
    emoji: "🦩",
    unicode: "U+1F9A9",
  },
  {
    id: "whale",
    label: "Whale",
    emoji: "🐋",
    unicode: "U+1F40B",
  },
];

type SvgIcon = {
  id: string;
  label: string;
  svg: IconType;
  stringifiedSvg: string;
};

export const svgicons: SvgIcon[] = [
  {
    id: "FaGhost",
    label: "FaGhost",
    svg: FaGhost,
    stringifiedSvg: stringifiedFaGhost,
  },
  {
    id: "FaEarlybirds",
    label: "FaEarlybirds",
    svg: FaEarlybirds,
    stringifiedSvg: stringifiedFaEarlybirds,
  },
  {
    id: "FaGithub",
    label: "FaGithub",
    svg: FaGithub,
    stringifiedSvg: stringifiedFaGithub,
  },
  {
    id: "FaGrav",
    label: "FaGrav",
    svg: FaGrav,
    stringifiedSvg: stringifiedFaGrav,
  },
  {
    id: "FaOctopusDeploy",
    label: "FaOctopusDeploy",
    svg: FaOctopusDeploy,
    stringifiedSvg: stringifiedFaOctopusDeploy,
  },
  {
    id: "FaOptinMonster",
    label: "FaOptinMonster",
    svg: FaOptinMonster,
    stringifiedSvg: stringifiedFaOptinMonster,
  },
  {
    id: "FaThemeisle",
    label: "FaThemeisle",
    svg: FaThemeisle,
    stringifiedSvg: stringifiedFaThemeisle,
  },
  {
    id: "FaCrow",
    label: "FaCrow",
    svg: FaCrow,
    stringifiedSvg: stringifiedFaCrow,
  },
  {
    id: "FaFighterJet",
    label: "FaFighterJet",
    svg: FaFighterJet,
    stringifiedSvg: stringifiedFaFighterJet,
  },
  {
    id: "FaFish",
    label: "FaFish",
    svg: FaFish,
    stringifiedSvg: stringifiedFaFish,
  },
  {
    id: "FaFrog",
    label: "FaFrog",
    svg: FaFrog,
    stringifiedSvg: stringifiedFaFrog,
  },
  {
    id: "FaHippo",
    label: "FaHippo",
    svg: FaHippo,
    stringifiedSvg: stringifiedFaHippo,
  },
  {
    id: "FaRegFlushed",
    label: "FaRegFlushed",
    svg: FaRegFlushed,
    stringifiedSvg: stringifiedFaRegFlushed,
  },
  {
    id: "FaRegGrinStars",
    label: "FaRegGrinStars",
    svg: FaRegGrinStars,
    stringifiedSvg: stringifiedFaRegGrinStars,
  },
  {
    id: "FaRegGrinSquintTears",
    label: "FaRegGrinSquintTears",
    svg: FaRegGrinSquintTears,
    stringifiedSvg: stringifiedFaRegGrinSquintTears,
  },
];
