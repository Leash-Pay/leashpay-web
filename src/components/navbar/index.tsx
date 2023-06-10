"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PrimaryButton } from "../customUI";
import Link from "next/link";

interface CustomLinkButtonProps {
  text: string;
  href?: string;
}

const CustomLinkButton = ({ text, href = "/" }: CustomLinkButtonProps) => {
  return (
    <div className="bg-[#F8F8F8] px-4 py-2  rounded-[20px] flex justify-between items-center">
      <div className="flex justify-between items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gradient-to-r from-[#E86000] to-[#F79400]"></div>
        <p className="text-primary font-base">{text}</p>
      </div>
      <button>
        <Link href={href}>
          <Image
            alt="open icon"
            src="/assets/icons/nav/right.svg"
            height={20}
            width={20}
          />
        </Link>
      </button>
    </div>
  );
};

const index = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(true);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let clickHandler = (e: any) => {
      if (!mobileMenuRef.current?.contains(e.target)) {
        setOpenMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });
  return (
    <nav className=" w-full ">
      <div className="container mx-auto px-5  max-w-7xl  ">
        {/* desktop */}
        <div className="hidden lg:flex w-full justify-between bg-[#FFFFFF]  px-4 md:px-8 py-3 rounded-[25px] shadow-xl  mt-6 ">
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
              <Link href="/">Solutions</Link>
            </button>
            <button>Developers</button>
            <button>
              <Link href="/company">Company</Link>
            </button>
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
        {/* mobile */}
        <div
          className="  border border-transparent relative flex flex-col"
          ref={mobileMenuRef}
        >
          <div className="h-24 lg:hidden"></div>
          <div
            className={`lg:hidden  absolute z-20 flex flex-col w-full justify-between items-center bg-[#FFFFFF]  px-4 md:px-8 py-3 rounded-[25px] shadow-xl   mt-6  border-red-500 ${
              openMobileMenu && "h-[80vh]  "
            }`}
          >
            <div className="w-full  flex justify-between">
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

              <div className=" w-full  flex items-center justify-end ">
                <button
                  className="relative  w-10 h-10"
                  onClick={() => setOpenMobileMenu((prev) => !prev)}
                >
                  <Image
                    src={`${
                      openMobileMenu
                        ? "/assets/icons/menu-close.svg"
                        : "/assets/icons/menu.svg"
                    }`}
                    blurDataURL="/assets/icons/menu.svg"
                    alt="leashpay logo"
                    className="h-full absolute"
                    fill
                    unoptimized
                  />
                </button>
              </div>
            </div>

            {openMobileMenu && (
              <div className="h-full w-full  flex flex-col justify-between my-4">
                <div className="w-full flex flex-col gap-6">
                  <div className="mt-5 flex flex-col gap-4">
                    <h1 className="text-primary font-medium text-3xl leading-10">
                      Digital payments infrastructure
                    </h1>
                    <p className="text-primary text-sm">
                      Deploy, control, and orchestrate every product you’ll need
                      from one place.
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 sm:gap-6">
                    <h1 className="text-secondary font-medium text-xl">
                      Accepting payments
                    </h1>

                    <div className="flex gap-2 flex-col">
                      <CustomLinkButton text="Online Payment" />
                      <CustomLinkButton text="In-person Payment" />
                      <CustomLinkButton text="Company" href="/company" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <PrimaryButton text="Get Started" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default index;
