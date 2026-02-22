import PageShell from "@/components/PageShell";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  { title: "Annual Alumni Gala 2026", date: "Mar 15, 2026", location: "New York, NY", time: "7:00 PM" },
  { title: "Tech Meetup: AI & Beyond", date: "Apr 2, 2026", location: "San Francisco, CA", time: "6:00 PM" },
  { title: "Spring Reunion Weekend", date: "May 10, 2026", location: "Campus Hall", time: "10:00 AM" },
  { title: "Networking Brunch", date: "Jun 8, 2026", location: "Chicago, IL", time: "11:00 AM" },
];

const Events = () => (
  <PageShell title="Events & Reunions" description="Join exciting events and reunions happening around the world.">
    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {events.map((e) => (
        <div key={e.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
          <h3 className="font-semibold text-lg mb-3">{e.title}</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {e.date}</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {e.location}</p>
            <p className="flex items-center gap-2"><Clock className="w-4 h-4" /> {e.time}</p>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Events;
