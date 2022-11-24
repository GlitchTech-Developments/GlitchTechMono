/* eslint-disable @typescript-eslint/no-explicit-any */

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../Partials/Banner"), {
  ssr: true,
});

const PageWrapper = (props: any) => {
  return (
    <div>
      <Banner
        Title={props.Title ? props.Title : ""}
        Description={props.Description ? props.Description : ""}
      />
      <div className="hero-overlay bg-translucent">
        <main className="container mx-auto flex min-h-screen flex-col items-center py-12 px-1">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
