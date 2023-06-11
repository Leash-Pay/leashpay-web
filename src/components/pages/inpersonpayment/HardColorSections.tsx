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
}

const HardColorSections = ({
  title,
  description,
  href,
  iconName,
  className,
  iconSize,
}: HardColorSectionsProps) => {
  return (
    <section className="customContainer h-[36rem]">
      <div
        className={` ${className} sm:hidden h-full py-8 px-6 flex flex-col justify-between rounded-[35px] relative`}
      >
        <div className="text-white flex flex-col gap-4">
          <h1 className="headerText1">{title}</h1>
          <p className="paragraphText1">{description}</p>
        </div>
        <div
          className={`w-full -ml-4  absolute inset-0   ${
            iconName === "pos" ? "top-[10rem]" : "top-[48%]"
          }`}
        >
          <Image
            src={`/assets/img/payment/${iconName}.png`}
            alt={`${iconName}`}
            width={iconSize.widht}
            height={iconSize.height}
            className="w-full "
          />
        </div>
        <div className="">
          <PrimaryButton text="Get Started" type={2} />
        </div>
      </div>
    </section>
  );
};

export default HardColorSections;
