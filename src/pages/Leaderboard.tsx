import PageShell from "@/components/PageShell";
import { Trophy, Star, Award } from "lucide-react";

const leaders = [
  { name: "Sarah Johnson", points: 2450, badge: "Top Mentor", icon: Trophy },
  { name: "Michael Chen", points: 2180, badge: "Community Star", icon: Star },
  { name: "Emily Rodriguez", points: 1920, badge: "Event Champion", icon: Award },
  { name: "David Kim", points: 1750, badge: "Rising Leader", icon: Star },
  { name: "Lisa Wang", points: 1600, badge: "Helpful Alumni", icon: Award },
];

const Leaderboard = () => (
  <PageShell title="Leaderboard" description="See who's making the biggest impact in our alumni community.">
    <div className="max-w-2xl mx-auto">
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        {leaders.map((l, i) => (
          <div key={l.name} className="flex items-center justify-between p-4 border-b border-border last:border-b-0 hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-muted-foreground w-8 text-center">#{i + 1}</span>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <l.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">{l.name}</p>
                <p className="text-xs text-muted-foreground">{l.badge}</p>
              </div>
            </div>
            <span className="font-semibold text-primary">{l.points.toLocaleString()} pts</span>
          </div>
        ))}
      </div>
    </div>
  </PageShell>
);

export default Leaderboard;
