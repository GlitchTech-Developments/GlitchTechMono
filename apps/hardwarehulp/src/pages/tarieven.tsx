import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import Banner from "../components/banner"
import PricingContent from "../components/content/PricingContent"

const Pricing: NextPage = () => {
  return (
    <>
      <NextSeo title="Tarieven" />
      <Banner title="Tarieven" desc="Alle tarieven zijn vrijgesteld van btw" />
      <PricingContent />
    </>
  )
}

export default Pricing
