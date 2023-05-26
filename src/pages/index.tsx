import { useRef, useCallback } from "react";
import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { usePathname, useSearchParams } from "next/navigation";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import type { RouterOutputs } from "~/utils/api";
import theme from "../styles/styles";
import useGeolocationPinGlobe from "~/store/geolocationPinGlobeStore";

import { PageLayout } from "~/components/layout";
import Globe from "~/components/globe/globe";
import GeolocationPinCard from "~/components/geolocation-pins/geolocation-pin-card";
import {
  ScrollButtonBottom,
  ScrollButtonTop,
} from "~/components/buttons/scroll-button";
import { LoadingPage } from "../components/loading";

const Jumbotron = () => {
  const geolocationPinGlobe = useGeolocationPinGlobe();

  const unmountGlobe = (
    <div className="text-slate-100">
      unmounted globe... toggle it back to view again 🔍🌎👀
    </div>
  );

  return (
    <div
      className={`${theme.bg.primary} ${theme.h.contentShrunkWithCb} flex w-full justify-center`}
    >
      <div className="flex items-center justify-center">
        {geolocationPinGlobe.isDisplayed && <Globe />}
        {!geolocationPinGlobe.isDisplayed && unmountGlobe}
      </div>
    </div>
  );
};

type GeolocationPinWithUser =
  RouterOutputs["geolocationPins"]["getAll"][number];
const CardSection = () => {
  const { data } = api.geolocationPins.getAll.useQuery();

  const geolocationPinGlobe = useGeolocationPinGlobe();

  if (!data) return null;

  return (
    <>
      <div
        className={`${theme.bg.primary} ${
          geolocationPinGlobe.isDisplayed ? "h-24" : ""
        }`}
      />
      <div className={`flex w-full justify-center`}>
        <div className="grid grid-cols-1 gap-8 py-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {data.map((geolocationPinWithUser: GeolocationPinWithUser) => {
            const { geolocationPin: pin, user } = geolocationPinWithUser;

            return (
              <GeolocationPinCard key={pin.id} {...geolocationPinWithUser} />
            );
          })}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <div className={`${theme.bg.navbarBackground} w-full border-t`}>
      <div className="flex items-center justify-center py-2 text-gray-500">
        <span>©2023 @hutajoullach</span>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const user = useUser();

  const jumbotronRef = useRef<HTMLDivElement>(null);
  const cardSectionRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = (direction: string) => {
    if (direction === "top") {
      jumbotronRef?.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (direction === "middle") {
      cardSectionRef?.current?.scrollIntoView({ behavior: "smooth" });
    }

    if (direction === "bottom") {
      footerRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  const { data, isLoading } = api.geolocationPins.getAll.useQuery();

  // if (isLoading)
  //   return <div className="flex h-full justify-center text-slate-100">Loading...</div>;

  if (isLoading) return <LoadingPage />;

  if (!data)
    return (
      <div className="flex h-full justify-center text-slate-100">
        Something went wrong
      </div>
    );

  return (
    <>
      <PageLayout>
        <span ref={jumbotronRef}></span>
        <Jumbotron />

        <span ref={cardSectionRef}></span>
        {category === "home" && <CardSection />}

        <span ref={footerRef}></span>
        <Footer />

        <div className="absolute bottom-5 right-5">
          <ScrollButtonTop
            onClick={() => handleScrollClick("top")}
            direction="top"
          />
          <ScrollButtonBottom
            onClick={() => handleScrollClick("middle")}
            direction="middle"
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
