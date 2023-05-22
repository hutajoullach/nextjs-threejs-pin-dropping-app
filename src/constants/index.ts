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
  GiCrowNest,
  GiPlesiosaurus,
  GiPlanetConquest,
  GiRaining,
  GiSeaCreature,
  GiMagnifyingGlass,
  GiPathDistance,
  GiShipBow,
  GiTrireme,
  GiBus,
  GiCommercialAirplane,
  GiControlTower,
  GiCampfire,
  GiCampingTent,
  GiCirclingFish,
  GiCycling,
  GiDrakkar,
  GiDutchBike,
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
    title: "title",
    desc: "desc",
  },
  center: {
    name: "global api",
    title: "title",
    desc: "desc",
  },
  right: {
    name: "explore",
    title: "title",
    desc: "desc",
  },
};

export const hotspotSearchMenuList = [
  {
    id: "id1",
    title: "title 1",
    icon: GiCrowNest,
  },
  {
    id: "id2",
    title: "title 2",
    icon: GiPlesiosaurus,
  },
  {
    id: "id3",
    title: "title 3",
    icon: GiPlanetConquest,
  },
  {
    id: "id4",
    title: "title 4",
    icon: GiRaining,
  },
  {
    id: "id5",
    title: "title 5",
    icon: GiSeaCreature,
  },
  {
    id: "id6",
    title: "title 6",
    icon: GiMagnifyingGlass,
  },
];

export const globalApiSearchMenuList = [
  {
    id: "id1",
    title: "title 1",
    icon: GiPathDistance,
  },
  {
    id: "id2",
    title: "title 2",
    icon: GiShipBow,
  },
  {
    id: "id3",
    title: "title 3",
    icon: GiTrireme,
  },
  {
    id: "id4",
    title: "title 4",
    icon: GiBus,
  },
  {
    id: "id5",
    title: "title 5",
    icon: GiCommercialAirplane,
  },
  {
    id: "id6",
    title: "title 6",
    icon: GiControlTower,
  },
];

export const exploreSearchMenuList = [
  {
    id: "id1",
    title: "title 1",
    icon: GiCampfire,
  },
  {
    id: "id2",
    title: "title 2",
    icon: GiCampingTent,
  },
  {
    id: "id3",
    title: "title 3",
    icon: GiCirclingFish,
  },
  {
    id: "id4",
    title: "title 4",
    icon: GiCycling,
  },
  {
    id: "id5",
    title: "title 5",
    icon: GiDrakkar,
  },
  {
    id: "id6",
    title: "title 6",
    icon: GiDutchBike,
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
