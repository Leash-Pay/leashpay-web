import siteMetadata from "@/lib/siteMetaData";
import Head from "next/head";
import React from "react";

import Navbar from "@/components/navbar";
import PageTransition from "../animations/PageTransition";

const MainLayout = (props: { [x: string]: any; children: any }) => {
  const { children, ...customMeta } = props;

  const meta = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    imageUrl: null,
    date: null,
    ...customMeta,
  };

  return (
    <div className="h-full w-full  ">
      <Navbar />

      <main className=" container mx-auto px-4 sm:px-0 flex flex-col h-full border border-red-700 relative mt-10 ">
        <div className="z-10">
          <PageTransition>{children}</PageTransition>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
