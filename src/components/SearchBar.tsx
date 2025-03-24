import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Input
        type="text"
        placeholder="Search for events..."
        className="pl-10 pr-12"
      />
      <Button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 rounded-full bg-primary hover:bg-primary/90"
      >
        <Search className="h-4 w-4" />
      </Button>
    </div>
  );
}
