import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import Banner from "../components/banner"
import ToolsContent from "../components/content/ToolsContent"

const Tools: NextPage = () => {
  return (
    <>
      <NextSeo title="Tools" />
      <Banner
        title="Tools"
        desc="Handige tools voor technische ondersteuning"
      />
      <ToolsContent />
    </>
  )
}

export default Tools
