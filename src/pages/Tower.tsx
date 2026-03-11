import Header from "@/components/alhamra/Header";
import TowerTabbedDashboard from "@/components/alhamra/TowerTabbedDashboard";
import CollapsibleSystemPulse from "@/components/alhamra/CollapsibleSystemPulse";
import TrustBadgesFooter from "@/components/alhamra/TrustBadgesFooter";
import AwardsSection from "@/components/alhamra/AwardsSection";
import Footer from "@/components/alhamra/Footer";

const Tower = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      
      {/* Collapsible System Pulse Sidebar */}
      <CollapsibleSystemPulse />
      
      <main className="pt-24 pb-24">
        {/* Tabbed Dashboard Hero */}
        <TowerTabbedDashboard />
        
        {/* Awards & Recognition */}
        <AwardsSection />
      </main>
      
      {/* Trust Badges Footer - Fixed at bottom */}
      <TrustBadgesFooter />
      
      {/* Main Footer with padding for trust badges */}
      <div className="pb-20">
        <Footer />
      </div>
    </div>
  );
};

export default Tower;
