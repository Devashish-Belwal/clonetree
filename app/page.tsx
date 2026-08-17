import EngagementAnalyze from "@/components/HomePage/EngagementAnalyze";
import FAQ from "@/components/HomePage/FAQ";
import Footer from "@/components/HomePage/Footer";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import Section2 from "@/components/HomePage/CreateCustomize";
import ShareAnywhere from "@/components/HomePage/ShareAnywhere";
import Testimonials from "@/components/HomePage/Testimonials";
import ShareContent from "@/components/HomePage/ShareContent";
import TrustedBy from "@/components/HomePage/TrustedBy/TrustedBy";
import PlansSection from "@/components/HomePage/Plans";
import FeaturedIn from "@/components/HomePage/FeaturedSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section2 />
      <ShareAnywhere />
      <EngagementAnalyze />
      <TrustedBy />
      <ShareContent />
      <PlansSection />
      <FeaturedIn />
      <Testimonials />
      <FAQ />
      <Footer />
    </>
  );
}
