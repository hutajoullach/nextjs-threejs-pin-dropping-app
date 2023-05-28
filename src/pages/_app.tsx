import { type AppType } from "next/app";
import Head from "next/head";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Next.js, Three.js Pin Dropping App</title>
          <meta name="description" content="t3-threejs-pin-dropping-app" />
          {/* <link rel="icon" href="/alphabet.svg" /> */}
        </Head>
        <Toaster position="top-center" />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
