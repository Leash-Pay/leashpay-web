import React from "react";

const SmartTerminalSection = () => {
  return (
    <section className="w-full bg-[#F0F0F0] h-[50rem] sm:h-[40rem]  py-16">
      <div className="customContainer flex flex-col md:flex-row justify-between items-center h-full  ">
        <div className="w-full"></div>
        <div className="w-full flex flex-col gap-6 order-first sm:order-last">
          <h1 className="text-primary headerText1">Smart Terminal</h1>
          <p className="text-primary paragraphText1">
            LeashPay Terminal enables you to build your own in-person checkout
            to accept payments in the physical world. We help you unify your
            online and offline channels with flexible developer tools,
            pre-certified card readers, and cloud-based hardware management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartTerminalSection;
