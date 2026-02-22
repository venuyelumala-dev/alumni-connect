import { Link } from "react-router-dom";
import { Users, Calendar, Briefcase, HandshakeIcon } from "lucide-react";

const features = [
  { icon: Users, title: "Alumni Directory", desc: "Connect with fellow graduates from around the world", path: "/directory" },
  { icon: Calendar, title: "Events & Reunions", desc: "Join exciting events and reunions in your area", path: "/events" },
  { icon: Briefcase, title: "Career Opportunities", desc: "Explore job postings and career advancement", path: "/jobs" },
  { icon: HandshakeIcon, title: "Mentorship Program", desc: "Find mentors or become one to guide others", path: "/networking" },
];

const FeaturesSection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        Everything You Need to Stay Connected
      </h2>
      <p className="text-center text-muted-foreground max-w-xl mx-auto mb-12">
        Discover all the tools and resources designed to help you maintain lifelong connections with your fellow alumni.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Link
            key={f.title}
            to={f.path}
            className="bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-shadow group block"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
            <p className="text-sm text-primary font-medium mt-3">Learn more →</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
