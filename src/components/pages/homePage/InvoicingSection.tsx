import Image from "next/image";
import React from "react";

const InvoicingSection = () => {
  return (
    <section className="homepageCardSize customContainer">
      <div className="bg-white flex flex-col sm:flex-row customHomepageSection">
        <div className="flex flex-col gap-6 w-full  sm:p-10 md:p-6 ">
          <h1 className="text-secondary headerText1">Invoicing</h1>
          <p className="text-primary paragraphText1 hidden sm:block">
            We let you invoice your clients in a matter of minutes. <br />
            Easily customize your invoice and send to your clients.
          </p>

          <p className="text-primary paragraphText1 sm:hidden">
            We let you invoice your clients in a matter of minutes. Easily
            customize your invoice and send to your clients.
          </p>
        </div>

        <div className="sm:hidden w-screen sm:w-full h-full  flex justify-center items-center  bg-[url('/assets/img/lp.png')] bg-cover bg-center  ">
          <div className=" mx-10 w-full h-full flex justify-center items-center flex-col">
            <Image
              alt="invoice"
              src="/assets/img/invoice2.png"
              blurDataURL="/assets/img/invoice.png"
              unoptimized
              width={474}
              height={480}
              className=""
            />
          </div>
        </div>

        <div className="hidden sm:flex w-full  h-full -ml-36 bg-[url('/assets/img/lp.png')] bg-left bg-contain bg-no-repeat">
          <div className=" w-full flex h-full  items-end flex-col mr-10">
            <Image
              alt="invoice"
              src="/assets/img/invoice2.png"
              blurDataURL="/assets/img/invoice.png"
              unoptimized
              width={474}
              height={480}
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicingSection;
