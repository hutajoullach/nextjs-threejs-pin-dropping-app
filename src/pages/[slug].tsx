import Head from "next/head";
import Image from "next/image";

import { api } from "~/utils/api";

import { PageLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";

const PageNotFound = () => {
  // if (true)
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-black text-slate-100">
  //       Page Not Found
  //     </div>
  //   );

  return (
    <div>
      <PageLayout>
        <></>
      </PageLayout>
    </div>
  );
};

export default PageNotFound;
