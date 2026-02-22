import PageShell from "@/components/PageShell";
import { Compass, Map, Target } from "lucide-react";

const tools = [
  { icon: Compass, title: "Career Roadmap", desc: "Get personalized career guidance based on your background and goals." },
  { icon: Map, title: "Alumni Map", desc: "Explore where alumni are located across the globe." },
  { icon: Target, title: "Goal Tracker", desc: "Set and track your professional development milestones." },
];

const AlumniCompass = () => (
  <PageShell title="Alumni Compass" description="Your personalized guide to navigating your post-graduation journey.">
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {tools.map((t) => (
        <div key={t.title} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <t.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">{t.title}</h3>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default AlumniCompass;
