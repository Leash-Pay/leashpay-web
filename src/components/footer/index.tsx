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
    <ul className="text-white text-lg flex flex-col gap-3.5">
      <div className="text-secondary font-medium uppercase tracking-widest my-3">
        About
      </div>
      <li>
        <Link href="/">About</Link>
      </li>
      <li>
        <Link href="/">Solutions</Link>
      </li>
      <li>
        <Link href="/">Pricing</Link>
      </li>
      <li>
        <Link href="/">Privacy Policy</Link>
      </li>
    </ul>
  );
};

const Company = () => {
  return (
    <ul className="text-white text-lg flex flex-col ">
      <div className="text-secondary font-medium uppercase tracking-widest my-3">
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
    <section className={`w-full  bg-primary border border-[#707070] `}>
      <div className="flex flex-col justify-between gap-12 customContainer mt-20 mb-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-secondary headerText1 leading-[4.5rem]">
            Start growing your business with us
          </h1>

          <div>
            <PrimaryButton text="Get Started" type={2} />
          </div>
        </div>

        <NavItems />
        <NavItems />
        <Company />

        {/* <hr className="  border-white border-[0.5px] w-full " /> */}
        <div className="border-t pt-6 mt-10 -mx-6">
          <p className="text-xs text-white text-center">
            © 2023 LeashPay. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
