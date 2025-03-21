import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import JoinUsSection from "@/components/JoinUsSection";
import MissionSection from "@/components/MissionSection";
import OffersSection from "@/components/OffersSection";
import TeamSection from "@/components/TeamSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function AboutUs() {
  return (
    <div className="transition-colors duration-300">
      <HeroSection />
      <MissionSection />
      <OffersSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TeamSection />
      <JoinUsSection />
    </div>
  );
}
