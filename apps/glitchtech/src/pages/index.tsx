import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import PageWrapper from "../components/layout/PageWrapper";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <PageWrapper Title="Home">
        <p className="wrap center container w-10/12 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          cumque vero tempore iusto consectetur ducimus suscipit harum ab
          repellendus. Velit doloribus nemo enim minus ratione quo. Perspiciatis
          maiores laborum explicabo!
        </p>
      </PageWrapper>
    </>
  );
};

export default Home;
