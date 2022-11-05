import { NextSeo } from "next-seo"
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
