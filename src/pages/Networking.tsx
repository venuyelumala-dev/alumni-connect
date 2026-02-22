import PageShell from "@/components/PageShell";
import { Users, MessageCircle, Lightbulb } from "lucide-react";

const sections = [
  { icon: Users, title: "Find a Mentor", desc: "Connect with experienced alumni who can guide your career path." },
  { icon: MessageCircle, title: "Discussion Groups", desc: "Join interest-based groups and engage in meaningful conversations." },
  { icon: Lightbulb, title: "Collaboration Hub", desc: "Find co-founders, collaborators, and partners for your next project." },
];

const Networking = () => (
  <PageShell title="Networking" description="Build meaningful connections with alumni around the world.">
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {sections.map((s) => (
        <div key={s.title} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground">{s.desc}</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Networking;
