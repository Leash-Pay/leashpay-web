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
    <div className="min-h-screen w-full border border-red-700">
      <Navbar />
      <div>hhh</div>
      <main className="flex flex-col border">
        <div className="z-10">
          <PageTransition>{children}</PageTransition>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
