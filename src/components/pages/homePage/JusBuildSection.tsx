import React from "react";

const JusBuildSection = () => {
  return (
    <section className=" text-center px-6 md:px-4  w-full flex justify-center  my-10  md:pt-14">
      <div className=" flex flex-col gap-8  items-center">
        <div className="max-w-2xl">
          <h1 className="text-secondary font-bold text-3xl md:text-4xl leading-[2.5rem] md:leading-[3rem]">
            Just build your website or App, we will handle all your payment
            needs
          </h1>
        </div>
        <div className="max-w-xl">
          <p className="text-primary font-normal text-base ">
            We have the tools required to build Websites and Apps that accept
            payments and send payouts globally.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JusBuildSection;
