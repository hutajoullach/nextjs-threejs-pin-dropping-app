import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import theme from "../styles/styles";

import { PageLayout } from "~/components/layout";

import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Jumbotron = () => {
  const { data } = api.geolocationPins.getAll.useQuery();

  if (!data) return null;

  return (
    <div className={`${theme.bg.primary} flex h-full w-full justify-center`}>
      <div>
        {data.map(({ geolocationPin: pin, user }) => (
          <div key={pin.id}>{`${pin.lat} ${pin.lon}`}</div>
        ))}
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
