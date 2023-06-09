import AboutLayout from "@/components/layouts/AboutLayout";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageTransition from "@/components/animations/PageTransition";

const Page = () => {
  return (
    <div className="h-full w-full  ">
      <div className="border border-primary h-[145vh] sm:h-[90vh] bg-[url('/assets/img/bg/about-mobile.jpeg')] sm:bg-[url('/assets/img/bg/about.jpeg')] bg-cover bg-right">
        <Navbar />
        <div className="flex flex-row justify-between h-full container mx-auto sm:px-10">
          <div className="w-full border h-full"></div>
          <div className="customContainer flex flex-col mt-16 gap-8 border order-first justify-center ">
            <div className="border flex flex-col gap-8">
              <h1 className="text-secondary headerText1 md:leading-[4.5rem]">
                Making payments seamless
              </h1>
              <p className="text-white paragraphText1">
                LeashPay Limited is a registered Ghanaian technology company
                that is focused on building digital payment technologies that
                enable the exchange of value between individuals, organizations
                and government agencies in a reliable, frictionless & secure
                manner. We design, engineer and implement bullet proof solutions
                and platforms geared toward enhancing user experiences for
                organizations & their customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <main className="  flex flex-col h-full   relative mt-16 sm:mt-6 border">
        <div className="z-10">
          <PageTransition>
            <div>hello</div>
          </PageTransition>
        </div>
      </main> */}
      <Footer />
    </div>
  );
};

export default Page;
