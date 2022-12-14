import { NextSeo } from "next-seo";
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import Favicons from "../components/Partials/Favicons";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />
          <Favicons />
        </Head>
        <NextSeo
          titleTemplate="%s | GlitchTech Developments"
          defaultTitle="Loading..."
          description="At GlitchTech Developments we work on web, app, software and game projects. We are located in the Netherlands."
          canonical="https://www.glitchtech.eu"
          openGraph={{
            url: "https://glitchtech.eu",
            title: "GlitchTech Developments",
            description:
              "At GlitchTech Developments we work on web, app, software and game projects. We are located in the Netherlands.",
            images: [
              {
                url: "/images/GlitchTechLogo.webp",
                width: 800,
                height: 600,
                alt: "At GlitchTech Developments we work on web, app, software and game projects. We are located in the Netherlands.",
                type: "image/jpeg",
              },
            ],
            site_name: "ProtestProtocol",
          }}
          twitter={{
            handle: "@GlitchTechEU",
            site: "@GlitchTechEU",
            cardType: "summary_large_image",
          }}
        />
        <body className="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-glitchtech_alt_dark to-slate-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
