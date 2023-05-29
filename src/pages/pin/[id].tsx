import { useRouter } from "next/router";
import Head from "next/head";

import { api } from "~/utils/api";
import theme from "../../styles/styles";
import { PageLayout } from "~/components/layout";
import SinglePinCard from "~/components/geolocation-pins/single-pin-card";
import { LoadingSpinner, LoadingPage } from "../../components/loading";

const SinglePinPage = () => {
  const router = useRouter();
  let id = router.query.id ?? "";
  if (Array.isArray(id)) id = id.join("");
  const { data, isFetching, isError } = api.geolocationPins.getById.useQuery(
    {
      id,
    },
    { staleTime: Infinity }
  );

  if (isFetching || !data)
    return (
      <div className="flex h-screen items-center justify-center bg-black text-slate-100">
        <LoadingPage />
      </div>
    );

  if (isError)
    return (
      <div className="flex h-screen items-center justify-center bg-black text-slate-100">
        Page Not Found
      </div>
    );

  return (
    <>
      <PageLayout>
        <div
          className={`${theme.top.content} ${theme.bg.primary} ${theme.font.color.primary} flex h-screen items-center justify-center`}
        >
          <SinglePinCard pinWithUser={data} />
        </div>
      </PageLayout>
    </>
  );
};

export default SinglePinPage;
