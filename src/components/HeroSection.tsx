import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 sm:mb-12">
            <span className="block">Discover Events in Chennai</span>
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Find concerts, workshops, and more
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Explore the vibrant events scene in Chennai. From concerts to workshops, 
            discover what's happening in your city.
          </p>
          <SearchBar />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Browse Events
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              Create Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
