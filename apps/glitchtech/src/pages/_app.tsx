import "../styles/globals.scss";
// import { useEffect, useRef, useState } from "react";

import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-black">
      <NextSeo
        titleTemplate="%s | GlitchTech Developments"
        defaultTitle="Loading..."
        description="At GlitchTech Developments we work on web, app, software and game projects. We are located in the Netherlands."
        canonical="https://www.protest-protocol.glitchtech.eu"
        openGraph={{
          url: "https://protest-protocol.glitchtech.eu",
          title: "GlitchTech Developments",
          description:
            "At GlitchTech Developments we work on web, app, software and game projects. We are located in the Netherlands.",
          // images: [
          //   {
          //     url: "/GlitchTech.webp",
          //     width: 800,
          //     height: 600,
          //     alt: "At GlitchTech Developments we work on web, app, software and game projects. We are located in the Netherlands.",
          //     type: "image/jpeg",
          //   },
          // ],
          site_name: "ProtestProtocol",
        }}
        twitter={{
          handle: "@GlitchTechEU",
          site: "@GlitchTechEU",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
