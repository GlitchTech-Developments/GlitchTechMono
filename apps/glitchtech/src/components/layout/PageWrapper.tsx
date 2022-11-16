/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "./Footer";
import Banner from "./Partials/Banner";
import GoToTopBtn from "./Partials/GoToTopBtn";

const PageWrapper = (props: any) => {
  return (
    <div>
      <Banner Title={props.Title} Description={""} />
      <div className="hero-overlay bg-translucent">
        <main className="container mx-auto flex min-h-screen flex-col items-center py-12 px-6">
          {props.children}
        </main>

        <GoToTopBtn />
      </div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
