import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <nav className=" w-full bg-[#FFFFFF]  px-6 py-4 rounded-[20px] shadow-xl  mt-6  ">
      <div className="flex w-full justify-between">
        <div className="w-full border">
          <Image
            src="/assets/icons/leashpay_logo.svg"
            width={259.526}
            height={51.704}
            alt="leashpay logo"
          />
        </div>

        <div className="hidden sm:flex justify-between border w-full text-primary">
          <button>Solutions</button>
          <button>Developers</button>
          <button>Company</button>
          <button>Pricing</button>

          <button className="rounded border bg-[#008999] text-white px-4 whitespace-nowrap py-2">
            Get Started
          </button>
        </div>

        <div className="sm:hidden w-full  flex items-center justify-end">
          <button className="">
            <img
              src="/assets/icons/menu.svg"
              alt="leashpay logo"
              className="h-full "
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default index;
