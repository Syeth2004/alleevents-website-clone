import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "March 25, 2025",
    time: "10:00 AM",
    location: "Chennai",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
    description: "Join industry experts for a day of learning and networking",
    organizer: "Tech Events Hub"
  },
  {
    id: 2,
    title: "Music Festival",
    date: "March 27, 2025",
    time: "6:00 PM",
    location: "Marina Beach",
    category: "Music",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
    description: "Live music performances by top artists",
    organizer: "Chennai Music Scene"
  },
  {
    id: 3,
    title: "Food & Culture Expo",
    date: "March 30, 2025",
    time: "11:00 AM",
    location: "Express Avenue",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop",
    description: "Experience the rich cultural heritage of Chennai",
    organizer: "Chennai Culture Fest"
  }
];

export function EventSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events in Chennai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {event.category}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{event.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">{event.date} at {event.time}</span>
                  <span className="text-sm text-gray-600">•</span>
                  <span className="text-sm text-gray-600">{event.location}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-2">
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Organized by {event.organizer}</span>
                  <button className="text-primary hover:text-primary/80 text-sm">
                    View Details
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
