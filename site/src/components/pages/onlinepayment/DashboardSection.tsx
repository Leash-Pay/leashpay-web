import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const DashboardSection = () => {
  return (
    <section className="customContainer">
      <div className="flex flex-col md:flex-row gap-10 py-8  items-start ">
        <div className="flex flex-col gap-6 w-full  md:mt-16 h-full">
          <h1 className="text-primary font-bold text-4xl">
            LeashPay Dashboard﻿
          </h1>
          <p className="text-base text-primary">
            All payments acceptance is powered by a single API integration and
            dashboard, reducing development time needed to implement and
            maintain your payments solution.
          </p>

          <div className="hidden md:block">
            <PrimaryButton text="Get Started" />
          </div>
        </div>
        <div className="w-full  h-full ">
          <Image
            src="/assets/img/dashboard.png"
            alt="checkout1"
            height={1944}
            width={3304}
            className=""
          />
        </div>

        <div className="md:hidden ">
          <PrimaryButton text="Get Started" />
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
