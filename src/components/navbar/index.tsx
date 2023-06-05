import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../customUI";

const index = () => {
  return (
    <nav className=" w-full ">
      <div className="container mx-auto px-4 sm:px-0">
        <div className=" flex w-full justify-between bg-[#FFFFFF] border px-4 md:px-8 py-4 rounded-[25px] shadow-xl  mt-6">
          <div className="w-full md:w-[60%]  flex items-start justify-center flex-col">
            <Image
              src="/assets/icons/leashpay_logo.svg"
              width={259.526}
              height={51.704}
              alt="leashpay logo"
              className="w-5/6 sm:w-4/12"
            />
          </div>

          <div className="hidden md:flex justify-between  w-full text-primary font-medium">
            <button>Solutions</button>
            <button>Developers</button>
            <button>Company</button>
            <button>Pricing</button>

            <PrimaryButton text="Get Started" />
          </div>

          <div className="md:hidden w-full  flex items-center justify-end ">
            <button className="">
              <img
                src="/assets/icons/menu.svg"
                alt="leashpay logo"
                className="h-full "
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
