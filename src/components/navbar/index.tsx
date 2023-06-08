import Image from "next/image";
import React from "react";
import { PrimaryButton } from "../customUI";
import Link from "next/link";

const index = () => {
  return (
    <nav className=" w-full ">
      <div className="container mx-auto px-4 sm:px-0">
        <div className=" flex w-full justify-between bg-[#FFFFFF]  px-4 md:px-8 py-3 rounded-[25px] shadow-xl  mt-6">
          <div className="w-full md:w-[60%]  flex items-start justify-center flex-col">
            <Link href="/">
              <Image
                src="/assets/icons/leashpay_logo.svg"
                width={259.526}
                height={51.704}
                alt="leashpay logo"
                className=" "
              />
            </Link>
          </div>

          <div className="hidden lg:flex justify-between  w-full text-primary font-medium  ml-10 text-xl">
            <button>
              <Link href="/solutions">Solutions</Link>
            </button>
            <button>Developers</button>
            <button>Company</button>
            <button>Pricing</button>

            <PrimaryButton text="Get Started" />
          </div>

          <div className="lg:hidden w-full  flex items-center justify-end ">
            <button className="relative  w-10 h-10">
              <Image
                src="/assets/icons/menu.svg"
                blurDataURL="/assets/icons/menu.svg"
                alt="leashpay logo"
                className="h-full absolute"
                fill
                unoptimized
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
