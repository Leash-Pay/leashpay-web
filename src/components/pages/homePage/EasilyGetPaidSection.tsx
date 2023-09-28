import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

const SingleListItem = ({
  text,
  iconUrl,
  iconSize,
}: {
  text: string;
  iconUrl: string;
  iconSize: { height: number; widht: number };
}) => {
  return (
    <div className="flex items-center gap-3 ">
      <div className=" w-10 flex items-center justify-center">
        <Image
          src={`/assets/icons/${iconUrl}`}
          alt={iconUrl}
          width={iconSize.widht}
          height={iconSize.height}
          className=""
        />
      </div>
      <div className="text-white font-medium text-xl">{text}</div>
    </div>
  );
};

const EasilyGetPaidSection = () => {
  return (
    <section className="customContainer  w-full   h-[50rem] sm:h-[38rem]">
      <div className="  bg-[url('/assets/img/bg/happy-lad-mobile.jpeg')] sm:bg-[url('/assets/img/bg/happy-lad.jpeg')] h-full bg-cover rounded-[50px] bg-center p-5 flex flex-col sm:flex-row md:pl-16">
        <div className="w-full flex flex-col justify-end sm:justify-around h-full gap-4  sm:p-10 md:p-6 ">
          <div className="hidden sm:block my-8"></div>
          <h1 className="headerText1 text-secondary ">Easily get paid</h1>
          <p className="paragraphText1 text-white">
            Sign up with LeashPay in few minutes and start receiving your
            payments.
          </p>
          <div className="my-3">
            <PrimaryButton text="Get Started" type={2} href="/signin" />
          </div>

          <div className="flex flex-col gap-3.5 ">
            <SingleListItem
              text="Ecommerce"
              iconUrl="ecommerce.svg"
              iconSize={{
                height: 29,
                widht: 29,
              }}
            />
            <SingleListItem
              text="In-person retailers"
              iconUrl="inperson-retail.svg"
              iconSize={{
                height: 10,
                widht: 20,
              }}
            />
            <SingleListItem
              text="Marketplaces"
              iconUrl="marketplace.svg"
              iconSize={{
                height: 30,
                widht: 32,
              }}
            />
            <SingleListItem
              text="Subscriptions Business"
              iconUrl="subscriptions.svg"
              iconSize={{
                height: 30,
                widht: 33,
              }}
            />
          </div>
        </div>
        <div className="w-full  hidden sm:flex flex-col">
          <div className="w-full  h-full "></div>
          <div className=" w-full  h-full relative p-5">
            <Image
              alt="just a pic"
              src="/assets/icons/lp-white.svg"
              width={972}
              height={668}
              className=" absolute object-center w-4/5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasilyGetPaidSection;
