import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const TrustSection = () => {
  return (
    <section className="h-full sm:h-[540px] w-full customContainer  ">
      <div className="bg-gradient-to-r from-[#E86000] to-[#F79400] flex flex-col sm:flex-row customHomepageSection h-full">
        <div className="flex flex-col gap-8 w-full  sm:p-10 md:p-6 text-white ">
          <h1 className=" headerText1">Trust</h1>
          <p className="= paragraphText1 hidden sm:block">
            Detect Fraud, protect your platform, lower your risk profile, <br />{" "}
            and remain compliant with our ready-to-deploy risk and fraud
            products.
          </p>

          <p className=" paragraphText1 sm:hidden">
            Detect Fraud, protect your platform, lower your risk profile, and
            remain compliant with our ready-to-deploy risk and fraud products.
          </p>

          <div>
            <PrimaryButton text="Learn More" />
          </div>
        </div>

        {/* monile */}
        <div className="sm:hidden w-screen sm:w-full h-[20rem]  flex justify-center items-center  bg-[url('/assets/img/bg/lp-white.png')] bg-cover bg-center  -mt-6 ">
          <div className=" mx-10 w-full h-full flex justify-center items-center flex-col">
            <Image
              alt="invoice"
              src="/assets/icons/trust.svg"
              blurDataURL="/assets/icons/trust.svg"
              unoptimized
              width={474}
              height={480}
              className="w-3/4"
            />
          </div>
        </div>
        {/* desktop */}
        <div className="hidden sm:flex w-full  h-full -ml-36 bg-[url('/assets/img/bg/lp-white.png')] bg-left bg-contain bg-no-repeat  ">
          <div className=" w-full flex h-full  items-end justify-center flex-col mr-16 ">
            <Image
              alt="invoice"
              src="/assets/icons/trust.svg"
              blurDataURL="/assets/icons/trust.svg"
              unoptimized
              width={474}
              height={480}
              className="w-[55%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
