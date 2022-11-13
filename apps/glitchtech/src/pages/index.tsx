import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-extrabold leading-normal dark:text-white md:text-[3rem]">
          <span className="text-glitchtech">GlitchTech</span> Developments
        </h1>
        <hr className="my-1 mx-auto h-1 w-48 rounded border-0 bg-gray-800 dark:bg-white md:my-1" />
        <h5 className="text-1xl text-center font-extrabold leading-normal dark:text-white md:text-[1.5rem]">
          Web, Software, App and Game developments
        </h5>
      </main>
    </>
  );
};

export default Home;
