import { usePathname, useSearchParams } from "next/navigation";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import theme from "../styles/styles";

import { PageLayout } from "~/components/layout";
import GeolocationPinGlobe from "~/components/globe/geolocation-pin-globe";
import WorldHappinessScoreGlobe from "~/components/globe/world-happiness-score-globe";

import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Jumbotron = () => {
  const { data } = api.geolocationPins.getAll.useQuery();

  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";

  if (!data) return null;

  const scaffolding = <div>scaffolding... come back later 🚧🏗️👷‍♂️</div>;

  return (
    <div className={`${theme.bg.primary} flex h-full w-full justify-center`}>
      <div className="flex items-center justify-center">
        {/* {data.map(({ geolocationPin: pin, user }) => (
          <div key={pin.id}>{`${pin.lat} ${pin.lon}`}</div>
        ))} */}
        {category === "home" && <GeolocationPinGlobe />}
        {category === "health" && <WorldHappinessScoreGlobe />}
        {category === "food" && scaffolding}
        {category === "stores" && scaffolding}
        {category === "weather" && scaffolding}
        {category === "wildfire" && scaffolding}
        {category === "tornado" && scaffolding}
        {category === "flood" && scaffolding}
        {category === "volcano" && scaffolding}
        {category === "traffic" && scaffolding}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className={`${theme.bg.navbarBackground} w-full`}>
      <div className="flex items-center justify-center py-2 text-gray-500">
        <span>©2023 @hutajoullach</span>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const user = useUser();

  const { data, isLoading } = api.geolocationPins.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Something went wrong</div>;

  return (
    <>
      <PageLayout>
        <Jumbotron />
        <Footer />
      </PageLayout>
    </>
  );
};

export default Home;
