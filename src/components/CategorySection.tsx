import { Button } from "@/components/ui/button";

const categories = [
  { id: 1, name: "Concerts", icon: "🎵", count: 150 },
  { id: 2, name: "Workshops", icon: "🎨", count: 85 },
  { id: 3, name: "Sports", icon: "⚽", count: 120 },
  { id: 4, name: "Business", icon: "💼", count: 95 },
  { id: 5, name: "Arts", icon: "🎭", count: 75 },
  { id: 6, name: "Exhibitions", icon: "🖼️", count: 65 },
];

export function CategorySection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Explore by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className="w-full justify-start gap-2 hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">{category.icon}</span>
              <div className="flex flex-col">
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-gray-600">{category.count} events</span>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
