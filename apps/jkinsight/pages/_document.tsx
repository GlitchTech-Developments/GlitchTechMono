import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import { CssBaseline } from "@nextui-org/react"
import React from "react"
import { NextSeo } from "next-seo"

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>{CssBaseline.flush()}</Head>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
