import React from "react";
import { PrimaryButton } from "../customUI";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
});

const NavItems = () => {
  return (
    <ul className="text-white text-lg flex flex-col gap-3.5 w-full ">
      <div className="text-secondary font-medium sm:text-base uppercase tracking-widest my-3">
        About
      </div>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">About</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">Solutions</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">Pricing</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">Privacy Policy</Link>
      </li>
    </ul>
  );
};

const Company = () => {
  return (
    <ul className="text-white text-lg flex flex-col w-full ">
      <div className="text-secondary font-medium sm:text-base uppercase tracking-widest mt-3 mb-6">
        Company
      </div>
      <li>Teshie Rasta Bushroad,</li>
      <li>Mango Tso St.,</li>
      <li>AA174</li>
      <li>Accra, Ghana</li>

      <li className="my-6">ask@leashpay.com</li>
      <li className="">+233 243513027</li>
    </ul>
  );
};

const index = () => {
  return (
    <section className={`w-full  bg-primary border border-[#707070] pb-8 `}>
      <div className="container mx-auto px-10 sm:px-0 mt-20 max-w-7xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-14 sm:col-span-2 ">
            <h1 className="text-secondary headerText1 leading-[4.5rem] md:leading-[4.5rem]">
              Start growing your business with us
            </h1>

            <div>
              <PrimaryButton text="Get Started" type={2} />
            </div>
          </div>

          <NavItems />
          <NavItems />
          <Company />
        </div>
      </div>
      <div className="border-t pt-6 mt-20 sm:mt-60 -mx-6">
        <p className="text-xs text-white text-center">
          © 2023 LeashPay. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default index;
