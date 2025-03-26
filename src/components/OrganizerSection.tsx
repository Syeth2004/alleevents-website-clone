import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const organizers = [
  {
    id: 1,
    name: "Chennai Events Hub",
    description: "Organizing top events in Chennai",
    events: 125,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=80&fit=crop",
    rating: 4.8,
    reviews: 250
  },
  {
    id: 2,
    name: "City Cultural",
    description: "Cultural events and workshops",
    events: 85,
    image: "https://images.unsplash.com/photo-1503443207922-dff7d5436d0b?w=80&h=80&fit=crop",
    rating: 4.7,
    reviews: 180
  },
  {
    id: 3,
    name: "Sports Chennai",
    description: "Sports events and tournaments",
    events: 92,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop",
    rating: 4.9,
    reviews: 210
  }
];

export function OrganizerSection() {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-8">Popular Organizers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizers.map((organizer) => (
            <Card key={organizer.id} className="hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={organizer.image} 
                  alt={organizer.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{organizer.rating} ⭐</span>
                    <span className="text-xs text-gray-300">{organizer.reviews} reviews</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">{organizer.name}</CardTitle>
                <CardDescription className="text-sm text-gray-600">
                  {organizer.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{organizer.events} events</span>
                  <button className="text-primary hover:text-primary/80 text-sm">
                    View Events
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
