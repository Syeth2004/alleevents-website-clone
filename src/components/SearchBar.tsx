import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative rounded-full bg-white/10 backdrop-blur-sm">
        <Input
          type="text"
          placeholder="Search for events..."
          className="pl-12 pr-14 bg-transparent border-none focus:ring-0 focus:border-transparent text-white placeholder:text-white/70 placeholder:text-sm placeholder:font-medium placeholder:tracking-wide"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/70" />
        <Button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 p-0 rounded-full bg-primary hover:bg-primary/90 text-white"
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
