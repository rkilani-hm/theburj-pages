import Header from "@/components/alhamra/Header";
import PresenceSection from "@/components/alhamra/PresenceSection";
import AwardsSection from "@/components/alhamra/AwardsSection";
import CapabilitiesSection from "@/components/alhamra/CapabilitiesSection";
import Footer from "@/components/alhamra/Footer";

const Tower = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="pt-24">
        <PresenceSection />
        <CapabilitiesSection />
        <AwardsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Tower;
