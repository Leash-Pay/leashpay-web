import MainLayout from "@/components/layouts/MainLayout";
import DocumentationSection from "@/components/pages/homePage/DocumentationSection";
import React from "react";
import TryLeashPay from "./components/TryLeashPay";

const PricingPage = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10">
        <TryLeashPay />
        <DocumentationSection />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
};

export default PricingPage;
