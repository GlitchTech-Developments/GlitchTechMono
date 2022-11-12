import "../styles/main.scss"
import type { AppType } from "next/dist/shared/lib/utils"
import { NextSeo } from "next-seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Head from "next/head"

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
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
