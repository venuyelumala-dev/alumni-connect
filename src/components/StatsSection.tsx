import { Users, Globe, Building, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Alumni Members" },
  { icon: Globe, value: "120+", label: "Countries" },
  { icon: Building, value: "15,000+", label: "Job Placements" },
  { icon: Heart, value: "$2,500,000+", label: "Donations Raised" },
];

const StatsSection = () => (
  <section className="py-16 bg-card">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
            <s.icon className="w-6 h-6 text-primary" />
          </div>
          <p className="text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
          <p className="text-sm text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
