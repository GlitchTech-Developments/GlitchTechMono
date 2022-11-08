import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-white md:text-[5rem]">
          <span className="text-green-500">GlitchTech</span> Developments
        </h1>
      </main>
    </>
  );
};

export default Home;
