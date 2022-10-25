import React from "react";
import Head from "next/head";
import AboutLayout from "../components/ui/about";
export default function About() {
  return (
    <main>
      <Head>
        <title>Builit || About</title>
      </Head>
      <AboutLayout />
    </main>
  );
}
