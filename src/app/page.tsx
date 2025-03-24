import { HeroSection } from "@/components/HeroSection";
import { EventSection } from "@/components/EventSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventSection />
    </main>
  );
}