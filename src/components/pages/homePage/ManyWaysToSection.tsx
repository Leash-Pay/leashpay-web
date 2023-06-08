import Image from "next/image";
import React from "react";

const SingleListItem = ({ logo }: { logo: string }) => {
  return (
    <div className="border border-primary rounded-[20px] h-[78px] w-[78px] md:h-[110px] md:w-[110px] flex justify-center items-center p-3">
      <Image
        src={`/assets/icons/networks/${logo}.svg`}
        alt={logo}
        width={107}
        height={28}
      />
    </div>
  );
};

const ManyWaysToSection = () => {
  return (
    <section className="w-full h-full customContainer">
      <div className="flex flex-col md:flex-row  bg-white customHomepageSection">
        <div className="flex flex-col gap-6 w-full  sm:p-10 md:p-6  ">
          <h1 className="text-secondary headerText1">Many ways to get paid</h1>
          <p className="text-primary paragraphText1">
            We integrate with the most popular payment methods globally,
            allowing your customers to choose from credit and debit cards,
            mobile money and more.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 w-full  sm:p-10  ">
          <div className=" w-full flex flex-row sm:justify-evenly justify-between gap-4 ">
            <SingleListItem logo="vodafone" />
            <SingleListItem logo="mtn" />
            <SingleListItem logo="airteltigo" />
          </div>
          <div className=" w-full flex flex-row sm:justify-evenly justify-between gap-4 ">
            <SingleListItem logo="vodafone" />
            <SingleListItem logo="mtn" />
            <SingleListItem logo="airteltigo" />
          </div>
          <div className=" w-full flex flex-row sm:justify-evenly justify-between gap-4 ">
            <SingleListItem logo="vodafone" />
            <SingleListItem logo="mtn" />
            <SingleListItem logo="airteltigo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManyWaysToSection;
