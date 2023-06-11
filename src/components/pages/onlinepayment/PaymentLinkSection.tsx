import Image from "next/image";
import React from "react";

interface SingleComponentProps {
  title: string;
  description: string;
  iconName: string;
}

const SingleComponent = ({
  title,
  description,
  iconName,
}: SingleComponentProps) => {
  return (
    <div className="border border-primary rounded-[32px] p-6 gap-4 flex flex-col justify-start h-[22rem] sm:h-[23rem] w-full">
      <div className="flex justify-center  h-[7rem] sm:h-[8rem]">
        <Image
          src={`/assets/icons/payment/${iconName}.svg`}
          height={80}
          width={80}
          alt={iconName}
          className="w-full"
        />
      </div>
      <div className="">
        <h1 className="text-secondary font-bold text-4xl">{title}</h1>
      </div>
      <div className="mt-4">
        <p className="text-primary">{description}</p>
      </div>
    </div>
  );
};

const PaymentLinkSection = () => {
  return (
    <section className="bg-white pt-20 pb-32 mt-10 h-">
      <div className="flex flex-col gap-10 customContainer  relative">
        <div className="flex flex-col md:flex-row gap-8 md:h-[35rem]">
          <div className="flex flex-col gap-10 w-full md:mt-20">
            <h1 className="text-primary headerText1">Payment Link</h1>
            <p className="text-primary">
              Use Payment Links to sell online without a website. Create a full
              payment page in just a few clicks and share the link with your
              customers.
            </p>
          </div>

          <div className="w-full ">
            <Image
              src="/assets/img/payment/payment_link.png"
              alt="payment link"
              height={2857}
              width={2403}
              className="md:hidden"
            />
          </div>
        </div>

        <div className="absolute inset-0 -z-30- -top-[12rem]  w-full md:flex  hidden justify-between ">
          <div className="w-full"></div>
          <div className="w-full  border-black ">
            <Image
              src="/assets/img/payment/payment_link.png"
              alt="payment link"
              height={2857}
              width={2403}
              className=""
            />
          </div>
        </div>

        <div className="">
          <h1 className="text-primary headerText1">
            How it works;
            <span className="font-light"> no code required</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-14 mt-16 justify-between">
          <SingleComponent
            title="Create a link"
            description={`You can use Payment Links to sell a product or service, start a
      subscription, or collect a donation. Match the look and feel of your brand
      by adding your logo and colors.`}
            iconName="link"
          />
          <SingleComponent
            title="Share the link"
            description={`Paste or embed the link anywhere. The same payment link can be shared with many customers and used across multiple channels.`}
            iconName="share"
          />
          <SingleComponent
            title="Get paid"
            description={`Use the Dashboard or email to be notified of a successful payment, and have the funds deposited into your bank account.`}
            iconName="paid"
          />
        </div>
      </div>
    </section>
  );
};

export default PaymentLinkSection;
