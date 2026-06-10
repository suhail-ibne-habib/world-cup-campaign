import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MembersInfo from "@/components/MembersInfo";
import TeamSelection from "@/components/TeamSelection";
import BottomBanner from "@/components/BottomBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#7FFFD4] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <MembersInfo />
        <TeamSelection />
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}
