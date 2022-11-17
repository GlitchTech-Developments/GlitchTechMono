/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import Banner from "./Partials/Banner";
import GoToTopBtn from "./Partials/GoToTopBtn";

const PageWrapper = (props: any) => {
  const [loading, setloading] = useState(true);
  const [fadeStart, setFadeStart] = useState(false);

  const Loaded = async () => {
    await setTimeout(() => {
      setloading(false);
    }, 1750);
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
      async () =>
        await setTimeout(() => {
          setFadeStart(true);
        }, 1000);

      return (
        <div
          className={`gt-hidden fixed z-50 flex h-screen w-full bg-black ${
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
  }, []);

  return (
    <div>
      <PageLoader />
      <Banner Title={props.Title} Description={""} />
      <div className="hero-overlay bg-translucent">
        <main className="container mx-auto flex min-h-screen flex-col items-center py-12 px-6">
          {props.children}
        </main>
        <GoToTopBtn />
      </div>
    </div>
  );
};

export default PageWrapper;
