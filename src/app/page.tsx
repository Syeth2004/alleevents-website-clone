import { HeroSection } from "@/components/HeroSection";
import { EventSection } from "@/components/EventSection";
import { CategorySection } from "@/components/CategorySection";
import { OrganizerSection } from "@/components/OrganizerSection";
import { ThingsToDoSection } from "@/components/ThingsToDoSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <EventSection />
      <CategorySection />
      <OrganizerSection />
      <ThingsToDoSection />
    </main>
  );
}