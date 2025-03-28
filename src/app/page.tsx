import { HeroSection } from "@/components/HeroSection";
import { EventSection } from "@/components/EventSection";
import { CategorySection } from "@/components/CategorySection";
import { OrganizerSection } from "@/components/OrganizerSection";
import { ThingsToDoSection } from "@/components/ThingsToDoSection";
import { CalendarSection } from "@/components/CalendarSection";
import { MenuSection } from "@/components/MenuSection";

const sampleEvents = [
  {
    id: "1",
    title: "Spring Music Festival",
    date: new Date("2025-04-01"),
    organizer: "Chennai Music Academy",
    location: "Marina Beach",
    price: "₹500"
  },
  {
    id: "2",
    title: "Tech Conference 2025",
    date: new Date("2025-04-15"),
    organizer: "TechCon",
    location: "Chennai Trade Center",
    price: "₹1500"
  },
  {
    id: "3",
    title: "Art Exhibition",
    date: new Date("2025-04-20"),
    organizer: "Chennai Art Gallery",
    location: "Government Museum",
    price: "₹200"
  },
  {
    id: "4",
    title: "Charity Run",
    date: new Date("2025-04-25"),
    organizer: "Youth for Change",
    location: "Guindy National Park",
    price: "Free"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <HeroSection />
      <MenuSection />
      <CalendarSection events={sampleEvents} />
      <EventSection />
      <CategorySection />
      <OrganizerSection />
      <ThingsToDoSection />
    </main>
  );
}