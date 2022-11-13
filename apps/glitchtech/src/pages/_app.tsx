import "../styles/globals.scss";

import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Header = dynamic(() => import("../components/layout/Header"), {
  ssr: false,
});

const ThemeProvider = dynamic(
  () => import("../components/providers/ThemeProvider/ThemeProvider"),
  { ssr: false }
);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
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
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
