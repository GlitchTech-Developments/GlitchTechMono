/* eslint-disable @typescript-eslint/no-explicit-any */

import Banner from "./Partials/Banner";

const PageWrapper = (props: any) => {
  return (
    <div>
      <Banner Title={props.Title} />
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        {props.children}
      </main>
    </div>
  );
};

export default PageWrapper;
