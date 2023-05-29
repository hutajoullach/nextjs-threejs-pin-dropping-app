import type { PropsWithChildren } from "react";

import theme from "../styles/styles";
import Navbar from "./navbar/navbar";
import Categories from "./navbar/categories";
import GeolocationPinModal from "./modals/geolocation-pin-modal";

export const PageLayout = (props: PropsWithChildren) => {
  return (
    <main className="flex h-screen justify-center">
      <div className="h-full w-full md:max-w-7xl">
        <Navbar />
        <Categories />
        <GeolocationPinModal />
        <div className={`${theme.h.contentShrunkWithCb}`}>{props.children}</div>
      </div>
    </main>
  );
};
