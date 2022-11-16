/* eslint-disable @typescript-eslint/no-explicit-any */

import Footer from "./Footer";
import Banner from "./Partials/Banner";

const PageWrapper = (props: any) => {
  return (
    <div>
      <Banner Title={props.Title} />
      <main className="container mx-auto flex min-h-screen flex-col items-center py-12 px-6">
        {props.children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
