import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-24 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12">
            <span className="block">Discover Events with</span>
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Alleevents
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
            Find the best events, concerts, workshops, and more happening in your city. 
            Connect with your community and experience the vibrant culture of Chennai.
          </p>
          <SearchBar />
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              Browse Events
            </Button>
            <Button size="lg" className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
              Create Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
