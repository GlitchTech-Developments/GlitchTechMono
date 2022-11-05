import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import Banner from "../components/banner"
import HomeContent from "../components/content/HomeContent"

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Banner
        title="HardwareHulp"
        desc="IT hulp aan huis in Kampen, Overijssel"
      />
      <HomeContent />
    </>
  )
}

export default Home
