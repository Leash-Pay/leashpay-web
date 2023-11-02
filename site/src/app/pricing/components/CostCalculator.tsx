"use client";
import { formatToMoney } from "@/lib/helperFunctions";
import React, { useEffect, useState } from "react";

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

const CostCalculator = () => {
  const LPcharges = 0.0195;
  const [inputAmount, setInputAmount] = useState(50.0);
  const [LPFees, setLPFees] = useState(LPcharges * inputAmount);
  const [settlementFee, setSettlementFee] = useState(inputAmount - LPFees);

  useEffect(() => {
    setLPFees(LPcharges * inputAmount);
    setSettlementFee(inputAmount - LPcharges * inputAmount);
  }, [inputAmount]);

  return (
    <div className="customContainer flex flex-col justify-center items-center pt-20">
      <h1 className="font-bold text-[28px] text-primary">
        See how much it costs to use LeashPay.
      </h1>
      <p className="text-primary my-8">
        Enter an amount into the calculator to see our charges in realtime.
      </p>
      <div className="w-full max-w-[680px]  bg-[#037784] text-white rounded-[36px]">
        <div className=" px-6 lg:px-10 py-8 flex flex-col gap-6  bg-[#008999] rounded-[36px]">
          <p className="uppercase font-bold  text-lg lg:text-xl">
            If you customer pays
          </p>

          <div className="h-6  -mb-[20px] -mt-4">
            {/* error messages */}
            <p className="text-red-400 hidden">error</p>
          </div>
          <div className="relative  h-[60px] lg:h-[65px]  w-full">
            <input
              type="number"
              onChange={(e) => setInputAmount(Number(e.target.value))}
              className="w-full h-full pl-16 lg:pl-[72px] text-primary placeholder:text-primary font-bold placeholder:font-bold text-xl lg:text-2xl placeholder:text-xl placeholder:lg:text-2xl rounded-[10px]"
              placeholder={inputAmount.toString()}
            />
            <div className="absolute  border-red-400 top-0 h-full flex items-center pl-4">
              <p className="text-primary text-xl lg:text-2xl font-bold">GHS</p>
            </div>
          </div>
          {/* desktop view */}
          <div className="hidden lg:block">
            <div className="flex justify-between font-medium text-lg uppercase">
              <p>We&lsquo;ll settle you</p>
              <p>Leashpay fees ({LPcharges * 100}%)</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-xl mt-2">
              <h1>GHS {formatToMoney(settlementFee)}</h1>
              <h1>GHS {formatToMoney(LPFees)}</h1>
            </div>
          </div>

          {/* mobile view */}
          <div className="lg:hidden flex gap-3 flex-col mt-4">
            <div className="flex flex-col uppercase">
              <p className="font-medium text-lg tracking-wider">
                We&lsquo;ll settle you
              </p>
              <h1 className="font-bold text-2xl">
                GHS {formatToMoney(settlementFee)}
              </h1>
            </div>
            <hr />
            <div className="flex flex-col uppercase">
              <p className="font-medium text-lg tracking-wider">
                Leashpay fees ({LPcharges * 100}%)
              </p>
              <h1 className="font-bold text-2xl">
                GHS {formatToMoney(LPFees)}
              </h1>
            </div>
          </div>
        </div>

        <div className=" px-6 lg:px-10 pt-6 pb-8 flex flex-col gap-2">
          <IndividualCheckItem text="Enjoy free automatic settlement within 48 hours" />
          <IndividualCheckItem text="No hidden fees or charges" />
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;
