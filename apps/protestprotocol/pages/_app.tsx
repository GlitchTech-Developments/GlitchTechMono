import "../styles/globals.scss";
// import { useEffect, useRef, useState } from "react";

import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        titleTemplate="%s | Protest Protocol"
        defaultTitle="Loading..."
        description="I am Protest Protocol, a 20 year old Drum and Bass producer from the Netherlands."
        canonical="https://www.protestprotocol.eu"
        openGraph={{
          url: "https://protestprotocol.eu",
          title: "Protest Protocol",
          description:
            "I am Protest Protocol, a 20 year old Drum and Bass producer from the Netherlands.",
          images: [
            {
              url: "/ProtestProtocol.webp",
              width: 800,
              height: 600,
              alt: "Protest Protocol, Drum and Bass brought to you from the Netherlands.",
              type: "image/jpeg",
            },
          ],
          site_name: "ProtestProtocol",
        }}
        twitter={{
          handle: "@ProtestProtocol",
          site: "@ProtestProtocol",
          cardType: "summary_large_image",
        }}
      />
      <div className="Background_static" />
      <div className="Background" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
