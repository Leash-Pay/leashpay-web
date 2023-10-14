import React from "react";

type SingleCardProps = {
  cardTitle: string;
  value: string;
  checkItems: string[];
};

const data: SingleCardProps[] = [
  {
    cardTitle: "Local Transactions",
    value: "1.95",
    checkItems: [
      "No upfront fees. You can start accepting payments in 30mins for free",
      "Accept payments from multiple payment channels including Mobile money",
    ],
  },
  {
    cardTitle: "International Transactions",
    value: "1.95",
    checkItems: [
      "Get paid by your customers from anywhere in the world",
      "International cards are charged and settled in Cedis by default",
    ],
  },
];

const IndividualCheckItem = ({ text }: { text: string }) => {
  return (
    <div className="flex gap-3 items-start ">
      <img
        alt="green check"
        src="/assets/icons/green-check.svg"
        className="h-[18px] w-[18px] mt-1"
      />
      <p>{text}</p>
    </div>
  );
};

const SigleCard = ({ props }: { props: SingleCardProps }) => {
  return (
    <div className="bg-white h-[320px] w-full max-w-[450px] rounded-[36px] p-8">
      <div className="flex flex-col justify-between gap-0.5">
        <p className="font-bold text-sm">{props.cardTitle}</p>
        <h1 className="headerText1">{props.value}%</h1>
        <div className="h-[0.5px] mt-2 bg-primary opacity-80" />
      </div>
      <div className="mt-6 flex flex-col gap-2">
        {props.checkItems &&
          props.checkItems.map((item, _x) => (
            <IndividualCheckItem key={_x} text={item} />
          ))}
      </div>
    </div>
  );
};

const PricingHero = () => {
  return (
    <div className="customContainer flex  flex-col text-primary gap-20 ">
      <div className="w-full  items-center text-center flex flex-col gap-6 ">
        <h1 className="headerText1">Simple, affordable pricing</h1>
        <p className="">We grow when you grow</p>
      </div>

      <div className="w-full  flex flex-col lg:flex-row justify-center gap-10 lg:gap-20 xl:gap-24">
        {data && data.map((add, _x) => <SigleCard key={_x} props={add} />)}
      </div>

      <div className="flex justify-center flex-col items-center -mt-8 lg:mt-0">
        <div className="bg-white  w-full max-w-[450px] rounded-[36px] p-8 flex flex-col gap-2">
          <h1 className="font-bold">Transfers</h1>
          <div>
            <p>Transfer to Mobile Money</p>
            <h1 className="font-bold text-3xl">GHS 1 per Transfer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
