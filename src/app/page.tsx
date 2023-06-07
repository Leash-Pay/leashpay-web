import MainLayout from "@/components/layouts/MainLayout";
import EasilyGetPaidSection from "@/components/pages/homePage/EasilyGetPaidSection";
import HeroSection from "@/components/pages/homePage/HeroSection";
import JusBuildSection from "@/components/pages/homePage/JusBuildSection";

export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-10 md:mt-10">
        <HeroSection />
        <JusBuildSection />
        <EasilyGetPaidSection />
        <div className="my-10"></div>
      </div>
    </MainLayout>
  );
}
