import siteMetadata from "@/lib/siteMetaData";
import Head from "next/head";
import React from "react";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTransition from "../animations/PageTransition";

const AboutLayout = (props: { [x: string]: any; children: any }) => {
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
      <main className="  flex flex-col h-full   relative mt-36 md:mt-6 ">
        <div className="z-10">
          <PageTransition>{children}</PageTransition>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutLayout;
