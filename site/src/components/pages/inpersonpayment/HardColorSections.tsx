import { PrimaryButton } from "@/components/customUI";
import Image from "next/image";
import React from "react";

interface HardColorSectionsProps {
  title: string;
  description: string;
  href?: string;
  iconName: string;
  className: string;
  iconSize: { widht: number; height: number };
  order?: "first" | "last";
  additionalDesktopClasses?: string;
}

const HardColorSections = ({
  title,
  description,
  href,
  iconName,
  className,
  iconSize,
  order = "last",
  additionalDesktopClasses,
}: HardColorSectionsProps) => {
  return (
    <section className="customContainer md:my-4 ">
      {/* mobile */}
      <div
        className={` ${className} md:hidden h-full py-8 px-6 flex flex-col justify-between rounded-[35px] gap-5 relative`}
      >
        <div className="text-white flex flex-col gap-4">
          <h1 className="headerText1">{title}</h1>
          <p className="paragraphText1">{description}</p>
        </div>
        <div className="  h-full w-screen  pr-10 -ml-10">
          <Image
            src={`/assets/img/payment/${iconName}.png`}
            alt={`${iconName}`}
            width={iconSize.widht}
            height={iconSize.height}
            className="w-full h-full"
          />
        </div>
        {/* <div
          className={`w-full -ml-4  absolute inset-0 border  ${
            iconName === "pos" ? "top-[13rem]" : "top-[45%]"
          }`}
        >
          <Image
            src={`/assets/img/payment/${iconName}.png`}
            alt={`${iconName}`}
            width={iconSize.widht}
            height={iconSize.height}
            className="w-full "
          />
        </div> */}
        <div className="">
          {iconName == "phone" ? (
            <PrimaryButton text="Get Started" type={2} />
          ) : (
            <PrimaryButton text="Get Started" type={3} />
          )}
        </div>
      </div>
      {/* desktop */}
      <div
        className={`${className} hidden md:block w-full  rounded-[35px] gap-10  py-8 pl-10 lg:pl-14 h-[24rem] lg:h-[24rem]`}
      >
        <div className="w-full grid grid-cols-2 lg:hidden h-full gap-6">
          <div className="w-col  flex flex-col justify-between ">
            <div className="w-full flex flex-col gap-8">
              <h1 className="font-bold text-5xl text-white">{title}</h1>
              <p className="paragraphText1 text-white">{description}</p>
            </div>
            <div>
              {iconName == "phone" ? (
                <PrimaryButton text="Get Started" type={2} />
              ) : (
                <PrimaryButton text="Get Started" type={3} />
              )}
            </div>
          </div>

          <div className={`w-col   ${order === "first" && "order-first"} `}>
            <Image
              src={`/assets/img/payment/${iconName}.png`}
              alt={`${iconName}`}
              width={iconSize.widht}
              height={iconSize.height}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="w-full grid-cols-4 hidden lg:grid h-full  gap-6 items-center">
          <div className="w-col   ">
            <h1 className="font-bold text-5xl md:leading-[3.4rem] text-white">
              {title}
            </h1>
          </div>
          <div className="w-col  flex  flex-col gap-10 h-full justify-center  mr-6">
            <p className="text-base font-light text-white">{description}</p>
            <div>
              {iconName == "phone" ? (
                <PrimaryButton text="Get Started" type={2} />
              ) : (
                <PrimaryButton text="Get Started" type={3} />
              )}
            </div>
          </div>
          <div
            className={`w-col col-span-2  h-full relative  ${
              order === "first" && "order-first"
            } `}
          >
            <div
              className={`h-[119%] w-full ${additionalDesktopClasses}    absolute `}
            >
              <Image
                src={`/assets/img/payment/${iconName}.png`}
                alt={`${iconName}`}
                width={iconSize.widht}
                height={iconSize.height}
                className="  absolute h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardColorSections;
