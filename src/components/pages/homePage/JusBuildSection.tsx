import React from "react";

const JusBuildSection = () => {
  return (
    <section className="text-center px-3 md:px-4  w-full flex justify-center md:mt-20">
      <div className=" flex flex-col gap-8 border items-center">
        <div className="max-w-3xl">
          <h1 className="text-secondary font-extrabold text-4xl md:text-4xl ">
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
