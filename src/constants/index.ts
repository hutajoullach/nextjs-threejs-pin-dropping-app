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
