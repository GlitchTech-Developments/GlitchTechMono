"use client";

import { NextSeo } from "next-seo";
import { useEffect } from "react";
import PageWrapper from "../components/layout/PageWrapper";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <NextSeo title="Home" />
      <PageWrapper Title="Error" errorObject={error} errorReset={reset} />
    </>
  );
}
