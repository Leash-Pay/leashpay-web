import Image from "next/image";
import Navbar from "../components/navbar";
import MainLayout from "@/components/layouts/MainLayout";
import { PrimaryButton, SecondaryButton } from "@/components/customUI";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10 md:mt-10">
        <section className=" flex flex-col md:flex-row justify-between w-full  items-center gap-16 px-3 md:px-6">
          <div className="w-full flex flex-col gap-10">
            <div className="flex flex-col gap-10 max-w-xl border">
              <h1 className="font-black text-4xl md:text-5xl text-primary">
                Financial tools that power your business
              </h1>
              <p className="text-primary font-normal text-base">
                Regardless of the size of your business, LeashPay offers
                everything software and API needed to build a world-class
                payments experiences.
              </p>
            </div>

            <div>
              <PrimaryButton text="Get Started" />
            </div>
          </div>
          <div className="w-full  flex justify-center">
            <Image
              src="/assets/img/phone.png"
              alt="phone"
              height={673}
              width={415}
              blurDataURL="/assets/img/phone.png"
              className="h-1/2"
            />
          </div>
        </section>
        <section className="text-center px-3 md:px-4  w-full flex justify-center md:mt-20">
          <div className=" flex flex-col gap-8 border items-center">
            <div className="max-w-3xl">
              <h1 className="text-secondary font-extrabold text-4xl md:text-4xl ">
                Just build your website or App, we will handle all your payment
                needs
              </h1>
            </div>
            <div className="max-w-xl">
              <p className="text-primary font-normal text-base ">
                We have the tools required to build Websites and Apps that
                accept payments and send payouts globally.
              </p>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
