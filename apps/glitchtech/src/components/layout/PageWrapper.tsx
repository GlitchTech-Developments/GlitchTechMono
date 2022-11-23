/* eslint-disable @typescript-eslint/no-explicit-any */

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Banner = dynamic(() => import("../Partials/Banner"), {
  ssr: true,
});

const PageWrapper = (props: any) => {
  const [loading, setloading] = useState(true);
  const [fadeStart, setFadeStart] = useState(false);
  const [fadeEnd, setFadeEnd] = useState(false);

  const Loaded = async () => {
    await setTimeout(() => {
      setloading(false);
    }, 1750);

    if (loading == false) {
      await setTimeout(() => {
        setFadeEnd(true);
      }, 50);
    } else {
      await setTimeout(() => {
        setFadeStart(true);
      }, 1000);
    }
  };

  const PageLoader = () => {
    if (loading == true) {
      return (
        <div className="fixed z-50 flex h-screen w-full bg-black">
          <PuffLoader
            className="m-auto"
            size={60}
            loading={loading}
            color="#00b619"
          />
        </div>
      );
    } else {
      return (
        <div
          className={`${
            fadeEnd == false ? "gt-hidden" : "hidden"
          } fixed z-50 flex h-screen w-full bg-black ${
            fadeStart == true && "hidden"
          }`}
        >
          <PuffLoader
            className="m-auto"
            size={60}
            loading={loading}
            color="#00b619"
          />
        </div>
      );
    }
  };

  useEffect(() => {
    Loaded();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PageLoader />
      <Banner
        Title={props.Title ? props.Title : ""}
        Description={props.Description ? props.Description : ""}
      />
      <div className="hero-overlay bg-translucent">
        <main className="container mx-auto flex min-h-screen flex-col items-center py-12 px-6">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default PageWrapper;
