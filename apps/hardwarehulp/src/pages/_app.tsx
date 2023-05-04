import "../styles/tailwind.css"
import "@fortawesome/fontawesome-svg-core/styles.css"

import type { AppType } from "next/dist/shared/lib/utils"
import { NextSeo } from "next-seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"
import Favicons from "../components/favicons"

import { config } from "@fortawesome/fontawesome-svg-core"
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <Favicons />
        <meta charSet="UTF-8" />
      </Head>
      <NextSeo
        titleTemplate="%s | HardwareHulp - IT hulp aan huis in Kampen, Overijssel"
        defaultTitle="Loading..."
        description="IT gerelateerde hulp aan huis in Kampen, Overijssel. Computers gebouwd op maat, technische ondersteuning en meer! Neem contact op!"
        canonical="https://hardwarehulp.nl"
        openGraph={{
          url: "https://hardwarehulp.nl",
          title: "HardwareHulp",
          description:
            "IT gerelateerde hulp aan huis in Kampen, Overijssel. Computers gebouwd op maat, technische ondersteuning en meer! Neem contact op!",
          images: [
            {
              url: "/img/logo-og.webp",
              width: 800,
              height: 600,
              alt: "HardwareHulp - IT gerelateerde ondersteuning op software en hardware vlak.",
              type: "image/jpeg",
            },
          ],
          site_name: "HardwareHulp",
        }}
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
