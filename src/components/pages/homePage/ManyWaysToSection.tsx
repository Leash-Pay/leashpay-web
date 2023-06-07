import Image from "next/image";
import React from "react";

const SingleListItem = () => {
  return (
    <div className="border border-primary rounded-[20px] h-[88px] w-[88px] sm:h-[123px] sm:w-[123px] flex justify-center items-center p-3">
      <Image
        src="/assets/icons/networks/vodafone.svg"
        alt="vodafone"
        width={107}
        height={28}
      />
    </div>
  );
};

const ManyWaysToSection = () => {
  return (
    <section className="customContainer w-full h-full ">
      <div className="flex flex-col sm:flex-row gap-10 bg-white p-5 rounded-[50px] items-center  py-10">
        <div className="flex flex-col gap-6 w-full sm:p-10 md:p-6 ">
          <h1 className="text-secondary headerText1">Many ways to get paid</h1>
          <p className="text-primary paragraphText1">
            We integrate with the most popular payment methods globally,
            allowing your customers to choose from credit and debit cards,
            mobile money and more.
          </p>
        </div>

        <div className="flex flex-col gap-8 w-full border sm:p-10">
          <div className=" w-full flex flex-row justify-between gap-4 ">
            <SingleListItem />
            <SingleListItem />
            <SingleListItem />
          </div>
          <div className=" w-full flex flex-row justify-between gap-4 ">
            <SingleListItem />
            <SingleListItem />
            <SingleListItem />
          </div>
          <div className=" w-full flex flex-row justify-between gap-4 ">
            <SingleListItem />
            <SingleListItem />
            <SingleListItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManyWaysToSection;
