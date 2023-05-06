import { type NextPage } from "next";
import { SignUp } from "@clerk/nextjs";

import { PageLayout } from "~/components/layout";

const Signup: NextPage = () => (
  <PageLayout>
    <div className="flex h-full w-full items-center justify-center">
      <SignUp
        path="/signup"
        routing="path"
        signInUrl="/signin"
        redirectUrl="/"
      />
    </div>
  </PageLayout>
);

export default Signup;
