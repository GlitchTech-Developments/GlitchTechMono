import type { NextPage } from "next"
import { NextSeo } from "next-seo"
import Banner from "../components/banner"
import ServicesContent from "../components/content/ServicesContent"

const Services: NextPage = () => {
  return (
    <>
      <NextSeo title="Diensten" />
      <Banner title="Diensten" desc="Alle diensten nemen plaats bij u thuis" />
      <ServicesContent />
    </>
  )
}

export default Services
