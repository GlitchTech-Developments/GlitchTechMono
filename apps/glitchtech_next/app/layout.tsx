import "../styles/tailwind.scss"

import { NextSeo } from "next-seo"

import Header from "../components/layout/Header"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
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
                url: "/images/GlitchTechBanner.webp",
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
        {children}
      </body>
    </html>
  )
}
export default RootLayout
