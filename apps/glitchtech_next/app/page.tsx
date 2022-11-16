import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import PageWrapper from "../components/layout/PageWrapper"
import Section from "../components/layout/Partials/Section"

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <PageWrapper Title="Home">
        <Section>
          <h2 className="mx-4 mb-4 border-b-[1px] border-glitchtech_alt pb-4 text-center font-mokoto_glitch_mk1 text-[1.75rem] text-glitchtech">
            Welcome to GlitchTech!
          </h2>
          <p className="wrap text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            cumque vero tempore iusto consectetur ducimus suscipit harum ab
            repellendus. Velit doloribus nemo enim minus ratione quo.
            Perspiciatis maiores laborum explicabo!
          </p>
        </Section>
      </PageWrapper>
    </>
  )
}
export default Home
