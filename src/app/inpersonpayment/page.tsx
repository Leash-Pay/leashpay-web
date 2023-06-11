import MainLayout from "@/components/layouts/MainLayout";
import HardColorSections from "@/components/pages/inpersonpayment/HardColorSections";
import HeroSection from "@/components/pages/inpersonpayment/HeroSection";
import SmartTerminalSection from "@/components/pages/inpersonpayment/SmartTerminalSection";
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
          href="/"
          iconName="card"
          className={`bg-[#F79400]`}
          iconSize={{ widht: 2190, height: 1375 }}
        />

        <HardColorSections
          title="POS Devices"
          description={`Accept in-person, contactless payments on POS hardware device`}
          href="/"
          iconName="pos"
          className={`bg-[#E86000]`}
          iconSize={{ widht: 1153, height: 860 }}
        />

        <HardColorSections
          title="Tap to Pay Mobile Devices"
          description={`Accept in-person, contactless payments on compatible iPhone or Android devices—no extra hardware needed.`}
          href="/"
          iconName="phone"
          className={`bg-[#008999]`}
          iconSize={{ widht: 1041, height: 623 }}
        />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
};

export default Page;
