"use client";
import React from "react";
import { PrimaryButton } from "../customUI";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { motion } from "framer-motion";

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
        <Link href="/company">About</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/inpersonpayment">Solutions</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">Pricing</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/privacypolicy">Privacy Policy</Link>
      </li>
    </ul>
  );
};

const DevelopersNav = () => {
  return (
    <ul className="text-white text-lg flex flex-col gap-3.5 w-full uppercase">
      <div className="text-secondary font-medium sm:text-base uppercase tracking-widest my-3">
        Developers
      </div>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">API Documentation</Link>
      </li>
      <li className="hover:underline decoration-secondary underline-offset-4">
        <Link href="/">SDK</Link>
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
      <li className="">+233(0)30-295-5345</li>
    </ul>
  );
};

const SocialLinks = () => {
  return (
    <div>
      <div className="text-secondary font-medium sm:text-base uppercase tracking-widest mt-3 mb-6">
        Follow Us
      </div>
      <div className="flex gap-4">
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://web.facebook.com/profile.php?id=100093226252024&sk=about"
        >
          <img src="/assets/icons/social/fb.svg" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://www.instagram.com/leashpay/"
        >
          <img src="/assets/icons/social/instagram.svg" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://twitter.com/LeashPay"
        >
          <img src="/assets/icons/social/twitter.svg" />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          target="_blank"
          href="https://www.linkedin.com/company/leashpay/"
        >
          <img src="/assets/icons/social/linkedin.svg" />
        </motion.a>
      </div>
    </div>
  );
};

const index = () => {
  return (
    <section className={`w-full  bg-primary border border-[#707070] pb-8 `}>
      <div className="container mx-auto px-5  mt-20 max-w-7xl ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="flex flex-col gap-14 sm:col-span-2 ">
            <h1 className="text-secondary headerText1 leading-[4.5rem] md:leading-[4.5rem]">
              Start growing your business with us
            </h1>

            <div>
              <PrimaryButton text="Get Started" type={2} href="/signin" />
            </div>
          </div>
          <NavItems />
          <DevelopersNav />
          <Company />
          <SocialLinks />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl border-t mt-20 pt-6">
        <p className="text-xs text-white text-center md:hidden">
          © 2023 LeashPay. All Rights Reserved.
        </p>
        <div className=" justify-between hidden md:flex">
          <p className="text-xs text-white text-center uppercase ">
            <Link href="/privacypolicy">Privacy Policy</Link>{" "}
            <span className="mx-2">|</span>
            <Link href="/terms">Terms and Condtions</Link>
          </p>
          <p className="text-xs text-white text-center ">
            © 2023 LeashPay. All Rights Reserved.
          </p>
        </div>
      </div>
      {/* <div className="border-t pt-6 mt-20 sm:mt-60 -mx-6">
        <p className="text-xs text-white text-center md:hidden">
          © 2023 LeashPay. All Rights Reserved.
        </p>

        <div className="hidden md:flex justify-between ">
          <p className="text-xs text-white text-center ">
            © 2023 LeashPay. All Rights Reserved.
          </p>
        </div>
      </div> */}
    </section>
  );
};

export default index;
