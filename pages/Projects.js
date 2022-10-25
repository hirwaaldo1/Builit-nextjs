import React from "react";
import Head from "next/head";
import ProjectsLayout from "../components/ui/projects";
export default function Projects() {
  return (
    <main>
      <Head>
        <title>Builit || Projects</title>
      </Head>
      <ProjectsLayout />
    </main>
  );
}
