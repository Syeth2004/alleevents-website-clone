import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Tech Conference 2025",
    date: "March 25, 2025",
    time: "10:00 AM",
    location: "Chennai",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Music Festival",
    date: "March 27, 2025",
    time: "6:00 PM",
    location: "Marina Beach",
    category: "Music",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Food & Culture Expo",
    date: "March 30, 2025",
    time: "11:00 AM",
    location: "Express Avenue",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
  }
];

export function EventSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events in Chennai</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <CardDescription>
                  {event.date} at {event.time}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {event.location}
                </div>
                <span className="inline-block mt-2 text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-1">
                  {event.category}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
