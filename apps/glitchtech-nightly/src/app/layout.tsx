"use client";
import "../styles/globals.scss";

import Favicons from "../components/layout/Partials/Favicons";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <head>
        <title>GlitchTech Developments</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <Favicons />
      </head>

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
export default App;
