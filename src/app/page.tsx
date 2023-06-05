import Image from "next/image";
import Navbar from "../components/navbar";
import MainLayout from "@/components/layouts/MainLayout";
import { PrimaryButton } from "@/components/customUI";

export default function Home() {
  return (
    <MainLayout>
      <div>
        <div className=" flex flex-col md:flex-row justify-between w-full border">
          <div className="w-full">
            <h1 className="font-extrabold text-3xl text-primary">
              Financial tools that power your business
            </h1>
            <p>
              Regardless of the size of your business, LeashPay offers
              everything software and API needed to build a world-class payments
              experiences.
            </p>

            <PrimaryButton text="Get Started" />
          </div>
          <div className="w-full border">gg</div>
        </div>
        <div></div>
      </div>
    </MainLayout>
  );
}
