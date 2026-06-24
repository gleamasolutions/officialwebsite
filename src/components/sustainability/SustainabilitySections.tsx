import SustainabilityEcosystem from "@/components/sustainability/SustainabilityEcosystem";
import SustainabilityGlobalExpansion from "@/components/sustainability/SustainabilityGlobalExpansion";
import SustainabilityHero from "@/components/sustainability/SustainabilityHero";
import SustainabilityHospitality from "@/components/sustainability/SustainabilityHospitality";
import SustainabilityInnovation from "@/components/sustainability/SustainabilityInnovation";
import SustainabilityInvestmentApproach from "@/components/sustainability/SustainabilityInvestmentApproach";
import SustainabilityVision from "@/components/sustainability/SustainabilityVision";
import SustainabilityWhoWeAre from "@/components/sustainability/SustainabilityWhoWeAre";
import PageCta from "@/components/shared/PageCta";
import { SUSTAINABILITY_CTA } from "@/constants/sustainability";

export default function SustainabilitySections() {
  return (
    <>
      <SustainabilityHero />
      <SustainabilityWhoWeAre />
      <SustainabilityEcosystem />
      <SustainabilityInvestmentApproach />
      <SustainabilityGlobalExpansion />
      <SustainabilityHospitality />
      <SustainabilityInnovation />
      <SustainabilityVision />
      <PageCta
        headline={SUSTAINABILITY_CTA.headline}
        description={SUSTAINABILITY_CTA.description}
        primaryLabel={SUSTAINABILITY_CTA.primaryLabel}
        primaryHref={SUSTAINABILITY_CTA.primaryHref}
        secondaryLabel={SUSTAINABILITY_CTA.secondaryLabel}
        secondaryHref={SUSTAINABILITY_CTA.secondaryHref}
        ariaLabel="Sustainability call to action"
      />
    </>
  );
}
