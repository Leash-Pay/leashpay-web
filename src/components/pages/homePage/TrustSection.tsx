import { PrimaryButton } from "@/components/customUI";
import React from "react";

const TrustSection = () => {
  return (
    <section className="homepageCardSize customContainer">
      <div className="bg-primary flex flex-col sm:flex-row customHomepageSection">
        <div className="flex flex-col gap-6 w-full  sm:p-10 md:p-6 ">
          <h1 className="text-secondary headerText1">Trust</h1>
          <p className="text-white paragraphText1 ">
            Detect Fraud, protect your platform, lower your risk profile, and
            remain compliant with our ready-to-deploy risk and fraud products.
          </p>

          <div>
            <PrimaryButton text="Learn More" type={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
