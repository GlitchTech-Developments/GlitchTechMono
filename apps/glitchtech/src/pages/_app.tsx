import "../styles/globals.scss";

import type { AppProps } from "next/app";
import Head from "next/head";
import dynamic from "next/dynamic";
import Image from "next/image";
import { NextSeo } from "next-seo";
import ImageLoader from "../utils/ImageLoader";

const Header = dynamic(() => import("../components/layout/Header"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/layout/Footer"), {
  ssr: false,
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
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
      <Header />
      <Image
        src="https://glitchtech.vercel.app/images/GlitchTechBackgroundAlt.webp"
        width={100}
        height={100}
        loader={ImageLoader}
        priority={true}
        placeholder="blur"
        blurDataURL="data:"
        alt="GlitchTech Banner image"
        className="fixed z-[-1] h-screen w-screen"
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default App;
