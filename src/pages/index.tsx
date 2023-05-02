import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";
import theme from "../styles/styles";

import { PageLayout } from "~/components/layout";

import { SignIn, SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

const Home: NextPage = () => {
  const user = useUser();

  const { data, isLoading } = api.geolocationPins.getAll.useQuery();

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Something went wrong</div>;

  const Jumbotron = () => {
    return (
      <div className="flex h-full w-full justify-center">
        <div>
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
        <div>
          {data.map((pin) => (
            <div key={pin.id}>{`${pin.lat} ${pin.lon}`}</div>
          ))}
        </div>
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className={`${theme.bg.navbarBackground} w-full`}>
        <div className="flex items-center justify-center py-2 text-white">
          <span>©2023 @hutajoullach</span>
        </div>
      </div>
    );
  };

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
