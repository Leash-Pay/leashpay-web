import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
import Waitlist from "./components/Waitlist";

const WaitlistPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20  bg-[url('/assets/img/bg/lp-gray-full.png')] bg-no-repeat bg-top md:bg-none bg-contain  border-red-400 py-10">
        <Waitlist />
        <div className=""></div>
      </div>
    </MainLayout>
  );
};

export default WaitlistPage;
