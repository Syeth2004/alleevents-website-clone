import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const thingsToDo = [
  {
    id: 1,
    title: "Visit Marina Beach",
    description: "Chennai's iconic beach with beautiful sunsets",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Explore Fort St. George",
    description: "Historic fort and museum",
    image: "https://images.unsplash.com/photo-1512314889304-3c2f82fc00a0?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Visit Kapaleeswarar Temple",
    description: "Ancient Dravidian architecture",
    image: "https://images.unsplash.com/photo-1512314889304-3c2f82fc00a0?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Chennai Central",
    description: "Historic railway station and landmark",
    image: "https://images.unsplash.com/photo-1512314889304-3c2f82fc00a0?w=400&h=300&fit=crop"
  }
];

export function ThingsToDoSection() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Things to Do in Chennai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {thingsToDo.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-sm">{item.title}</CardTitle>
                <CardDescription className="text-xs">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
