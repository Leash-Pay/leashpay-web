import Image from "next/image";
import React from "react";

interface SingleComponentProps {
  title: string;
  description: string;
}

const SingleComponent = ({ title, description }: SingleComponentProps) => {
  return (
    <div className="flex flex-col gap-6 w-full flex-shrink-0">
      <h1 className="text-secondary text-4xl sm:text-5xl font-bold">{title}</h1>
      <p className="text-primary text-lg">{description}</p>
    </div>
  );
};

const MissionVisionSection = () => {
  return (
    <section className="bg-white py-40">
      <section className="container mx-auto sm:px-5 max-w-7xl h-fit">
        <div className="flex flex-col md:flex-row justify-between   gap-10 sm:gap-20  h-full">
          <div className="w-full  md:order-last  flex flex-col  items-end">
            <Image
              src="/assets/img/about/lp.png"
              height={844}
              width={1037}
              alt="leashpay icon"
              className=" "
            />
          </div>
          <div className="w-full  md:w-3/5 overflow-scroll flex md:flex-col  overflow-x-scroll gap-16 justify-between ml-10 sm:ml-0">
            <SingleComponent
              title="Our goal"
              description="Our goal and focus are premised on providing and delivering
        state-of-the-art payment solutions that are secured, fast and convenient
        whether operational online, in-app or in-shop."
            />
            <SingleComponent
              title="Vision"
              description="To be a global Tech Giant; Impacting with innovation."
            />
            <SingleComponent
              title="Misison"
              description="To enable secure and convenient access to payments for every business and individual"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default MissionVisionSection;
