import Image from "next/image";
import React from "react";

const SmartTerminalSection = () => {
  return (
    <section className="w-full bg-[#F0F0F0]  sm:h-[40rem] h-full  py-16 relative">
      <div className="customContainer flex flex-col md:flex-row justify-between items-center h-full gap-10 ">
        <div className="w-full flex flex-col gap-6 order-first sm:order-first md:mr-24">
          <h1 className="text-primary headerText1">Smart Terminal</h1>
          <p className="text-primary paragraphText1">
            LeashPay Terminal enables you to build your own in-person checkout
            to accept payments in the physical world. We help you unify your
            online and offline channels with flexible developer tools,
            pre-certified card readers, and cloud-based hardware management.
          </p>
        </div>
        <div className="hidden md:block w-full"></div>
        <div className="w-screen md:hidden  border-black bg-[url('/assets/icons/terminal-bg.svg')] bg-cover  h-[28rem] bg-[center_left_2rem] bg-no-repeat  ">
          <div className="  h-full w-full customContainer   flex justify-center">
            <Image
              src="/assets/icons/terminal.svg"
              height={564}
              width={352}
              alt="smart terminal "
              className="w-[65%] mt-6"
            />
          </div>
        </div>
      </div>

      {/* desktop */}
      <div className=" absolute w-full inset-0 py-10 hidden md:block">
        <div className=" w-full flex h-full flex-row gap-10">
          <div className="w-full h-full"></div>
          <div className="h-full w-full bg-[url('/assets/icons/terminal-bg.svg')] bg-cover relative">
            <div className="h-full absolute -left-8 top-[15%]">
              <Image
                src="/assets/icons/terminal.svg"
                height={564}
                width={352}
                alt="smart terminal "
                className="w-4/5"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartTerminalSection;
