const tags = [
  "Top Mentor of the Month",
  "Alumni Engagement Leaderboard",
  "Mentorship Rewards & Recognition",
  "Gamified Alumni Contributions",
  "Alumni Toolkit (AI)",
  "Career Roadmaps",
  "Networking Events",
];

const ScrollingTags = () => (
  <section className="py-6 overflow-hidden bg-secondary/50">
    <div className="flex animate-scroll-left w-max gap-4">
      {[...tags, ...tags].map((t, i) => (
        <span
          key={i}
          className="px-5 py-2 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground whitespace-nowrap"
        >
          {t}
        </span>
      ))}
    </div>
  </section>
);

export default ScrollingTags;
