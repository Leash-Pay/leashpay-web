import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/pages/onlinepayment/HeroSection";
import React from "react";

const Page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10">
        <HeroSection />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
};

export default Page;
