import Head from "next/head";

import { api } from "~/utils/api";
import theme from "../../styles/styles";
import { PageLayout } from "~/components/layout";
import SinglePinCard from "~/components/geolocation-pins/single-pin-card";

const SinglePinPage = () => {
  // const { data } = api.geolocationPins.getById.useQuery({
  //   id,
  // });

  // if (!data) return <div></div>;

  return (
    <>
      <PageLayout>
        <div
          className={`${theme.top.content} ${theme.bg.primary} ${theme.font.color.primary} flex h-screen items-center justify-center`}
        >
          <SinglePinCard />
        </div>
      </PageLayout>
    </>
  );
};

export default SinglePinPage;
