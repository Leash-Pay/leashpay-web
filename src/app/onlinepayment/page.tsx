import MainLayout from "@/components/layouts/MainLayout";
import DashboardSection from "@/components/pages/inpersonpayment/DashboardSection";
import HeroSection from "@/components/pages/onlinepayment/HeroSection";
import PaymentLinkSection from "@/components/pages/onlinepayment/PaymentLinkSection";
import RightForYouSection from "@/components/pages/onlinepayment/RightForYouSection";
import SimplifyPayment from "@/components/pages/onlinepayment/SimplifyPayment";
import React from "react";

const Page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10">
        <HeroSection />
        <SimplifyPayment />
        <RightForYouSection />
        <PaymentLinkSection />
        <DashboardSection />
        <div className="my-4"></div>
      </div>
    </MainLayout>
  );
};

export default Page;
