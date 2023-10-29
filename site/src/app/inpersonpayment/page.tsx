import MainLayout from "@/components/layouts/MainLayout";
import HardColorSections from "@/components/pages/inpersonpayment/HardColorSections";
import HeroSection from "@/components/pages/inpersonpayment/HeroSection";
import SmartTerminalSection from "@/components/pages/inpersonpayment/SmartTerminalSection";
import DashboardSection from "@/components/pages/inpersonpayment/DashboardSection";
import React from "react";

const Page = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10">
        <HeroSection />
        <SmartTerminalSection />

        <HardColorSections
          title="EMV-certified Card Readers"
          description="We integrate with the most popular payment methods globally,
            allowing your customers to choose from credit and debit cards,
            mobile money and more."
          href="/waitlist"
          iconName="card"
          className={`bg-[#F79400]`}
          iconSize={{ widht: 2190, height: 1375 }}
          additionalDesktopClasses="-top-6"
        />

        <HardColorSections
          title="POS Devices"
          description={`Accept in-person, contactless payments on POS hardware device`}
          href="/waitlist"
          iconName="pos"
          className={`bg-[#E86000]`}
          iconSize={{ widht: 1153, height: 860 }}
          order={"first"}
          additionalDesktopClasses="-top-4"
        />

        <HardColorSections
          title="Tap to Pay Mobile Devices"
          description={`Accept in-person, contactless payments on compatible iPhone or Android devices—no extra hardware needed.`}
          href="/waitlist"
          iconName="phone"
          className={`bg-[#008999]`}
          iconSize={{ widht: 1041, height: 623 }}
          additionalDesktopClasses="-top-10 left-4 "
        />
        <div className="my-2"></div>
        <DashboardSection />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
};

export default Page;
