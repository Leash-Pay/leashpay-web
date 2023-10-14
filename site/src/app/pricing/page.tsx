import MainLayout from "@/components/layouts/MainLayout";
import DocumentationSection from "@/components/pages/homePage/DocumentationSection";
import React from "react";
import TryLeashPay from "./components/TryLeashPay";
import PricingHero from "./components/PricingHero";

const PricingPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10">
        <PricingHero />
        <TryLeashPay />
        <DocumentationSection />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
