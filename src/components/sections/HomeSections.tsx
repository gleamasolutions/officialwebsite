"use client";

import Preloader from "@/components/sections/Preloader";
import HeroSection from "@/components/sections/HeroSection";
import CompanyOverview from "@/components/sections/CompanyOverview";
import InvestmentSectors from "@/components/sections/InvestmentSectors";
import WhyChooseGleama from "@/components/sections/WhyChooseGleama";
import LeadershipPreview from "@/components/sections/LeadershipPreview";
import LatestInsights from "@/components/sections/LatestInsights";
import CallToAction from "@/components/sections/CallToAction";

export default function HomeSections() {
  return (
    <>
      <Preloader />
      <HeroSection />
      <CompanyOverview />
      <InvestmentSectors />
      <WhyChooseGleama />
      <LeadershipPreview />
      <LatestInsights />
      <CallToAction />
    </>
  );
}
