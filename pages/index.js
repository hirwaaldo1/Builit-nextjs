import React from "react";
import Head from "next/head";
import HomeLayout from "../components/ui/home";
export default function Home() {
  return (
    <main>
      <Head>
        <title>Builit || Home</title>
      </Head>
      <HomeLayout />
    </main>
  );
}
