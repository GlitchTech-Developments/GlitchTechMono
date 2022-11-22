import "../styles/globals.scss"
import delay from "../components/functions/utils/delay"

import { useEffect } from "react"
import type { AppProps } from "next/app"
import { NextSeo } from "next-seo"

import MainLayout from "../components/layouts/MainLayout/MainLayout"

function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window !== "undefined") {
    const html = document.getElementsByTagName("html")
    html[0].classList.add("MainLoading")
  }

  useEffect(() => {
    const loader = async () => {
      await delay(950)
      if (typeof window !== "undefined") {
        const html = document.getElementsByTagName("html")
        html[0].classList.remove("MainLoading")
        html[0].classList.add("MainLoaded")
      }
    }

    loader()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <NextSeo
        titleTemplate="%s | Personal portfolio by Jesse Koldewijn"
        defaultTitle="JKinsight | Personal portfolio by Jesse Koldewijn"
        description="JKinsight - A personal portfolio website made by Jesse Koldewijn"
        canonical="https://jkinsight.nl/"
        openGraph={{
          url: "https://jkinsight.nl/",
          title: "JKinsight | Personal portfolio by Jesse Koldewijn",
          description:
            "JKinsight - A personal portfolio website made by Jesse Koldewijn",
          images: [
            {
              url: "/og-graph.png",
              width: 800,
              height: 420,
              alt: "Jesse Koldewijn - Software Developer and Tech Enthusiast",
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: "manifest",
            href: "/site.webmanifest",
          },
          {
            rel: "sitemap",
            type: "application/xml",
            href: "/sitemap.xml",
          },
          {
            rel: "robots",
            href: "/robots.txt",
          },
        ]}
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}

export default MyApp
