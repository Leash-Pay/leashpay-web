import AboutLayout from "@/components/layouts/AboutLayout";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTransition from "@/components/animations/PageTransition";
import MissionVisionSection from "@/components/pages/about/MissionVisionSection";
import CoreValueSection from "@/components/pages/about/CoreValueSection";

const Page = () => {
  return (
    <div className="h-full w-full   ">
      <div className=" border-primary h-[160vh] sm:h-[100vh] bg-[url('/assets/img/bg/about-mobile.jpeg')] md:bg-[url('/assets/img/bg/about.jpeg')] bg-cover bg-[center_left_26rem] md:bg-center flex flex-col">
        <Navbar />
        <div className=" w-full  h-full container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-16 ">
          <div className="w-full  "></div>
          <div className="w-full flex flex-col mt-16 gap-8  order-first justify-center ">
            <PageTransition>
              <div className="flex flex-col gap-8 mt-8 sm:mt-0">
                <h1 className="text-secondary headerText1 md:leading-[4.5rem]">
                  Making payments seamless
                </h1>
                <p className="text-white paragraphText1">
                  LeashPay Limited is a registered Ghanaian technology company
                  that is focused on building digital payment technologies that
                  enable the exchange of value between individuals,
                  organizations and government agencies in a reliable,
                  frictionless & secure manner. We design, engineer and
                  implement bullet proof solutions and platforms geared toward
                  enhancing user experiences for organizations & their
                  customers.
                </p>
              </div>
            </PageTransition>
          </div>
        </div>
      </div>
      <main className="flex flex-col">
        <MissionVisionSection />
        <CoreValueSection />
        <div className="my-10"></div>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
