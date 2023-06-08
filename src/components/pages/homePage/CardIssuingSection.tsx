import Image from "next/image";
import React from "react";

const CardIssuingSection = () => {
  return (
    <section className="customContainer w-full">
      <div className="customHomepageSection bg-primary  flex flex-col sm:flex-row ">
        <div className="flex flex-col gap-6 w-full  sm:p-10 md:p-6 ">
          <h1 className="text-secondary headerText1">Card Issuing</h1>
          <p className="text-white paragraphText1">
            Quickly issue cards and process card payments through our single API
            platform. We offer virtual card processing.
          </p>

          <p className="text-secondary font-bold mt-10 hidden sm:block">
            *Physical card coming soon
          </p>
        </div>

        <div className="w-full mt-10 sm:mt-0 ">
          <Image
            src="/assets/img/card.png"
            alt="card image"
            width={302}
            height={184}
            className=" w-full "
          />

          <p className="text-secondary font-bold mt-10 sm:hidden">
            *Physical card coming soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default CardIssuingSection;
