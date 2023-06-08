import MainLayout from "@/components/layouts/MainLayout";
import CardIssuingSection from "@/components/pages/homePage/CardIssuingSection";
import EasilyGetPaidSection from "@/components/pages/homePage/EasilyGetPaidSection";
import HeroSection from "@/components/pages/homePage/HeroSection";
import InvoicingSection from "@/components/pages/homePage/InvoicingSection";
import JusBuildSection from "@/components/pages/homePage/JusBuildSection";
import ManyWaysToSection from "@/components/pages/homePage/ManyWaysToSection";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-20 md:mt-10">
        <HeroSection />
        <JusBuildSection />
        <EasilyGetPaidSection />
        <ManyWaysToSection />
        <CardIssuingSection />
        <InvoicingSection />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
}
