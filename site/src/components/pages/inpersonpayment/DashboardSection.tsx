import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const DashboardSection = () => {
  return (
    <section className="w-full   sm:h-[40rem] h-[50rem]  py-16 relative">
      {/* desktop */}
      <div className=" absolute w-full inset-0 py-10 hidden md:block ">
        <div className=" w-full flex h-full flex-row gap-10">
          <div className="w-full "></div>
          <div className="h-full w-full bg-[url('/assets/img/dashboard.png')] bg-cover relative ">
            <div className="h-full absolute -left-8 top-[15%]">
              {/* <Image
                src="/assets/icons/terminal.svg"
                height={564}
                width={352}
                alt="smart terminal "
                className="w-4/5"
              /> */}
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="h-full absolute py-10 w-full">
        <div className="customContainer flex flex-col md:flex-row justify-between items-center h-full  z-20 ">
          <div className="w-full flex flex-col gap-8 order-first sm:order-first md:mr-24  md:h-full  ">
            <h1 className="text-primary headerText1">LeashPay Dashboard</h1>
            <p className="text-primary paragraphText1">
              All payments acceptance is powered by a single API integration and
              dashboard, reducing development time needed to implement and
              maintain your payments solution.
            </p>
            <div>
              <PrimaryButton text="Get Started" href="/waitlist" />
            </div>
          </div>
          <div className="hidden md:block w-full"></div>
          <div className="w-screen md:hidden   bg-[url('/assets/img/dashboard.png')] bg-cover  h-[25rem] sm:h-[30rem] bg-[center_left_1.5rem] bg-no-repeat  ">
            <div className="  h-full w-full customContainer   flex justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
