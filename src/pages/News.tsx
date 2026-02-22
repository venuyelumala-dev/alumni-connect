import PageShell from "@/components/PageShell";

const articles = [
  { title: "Alumni Spotlight: Jane Doe's Journey to CEO", date: "Feb 20, 2026", excerpt: "From a computer science major to leading a Fortune 500 company..." },
  { title: "Campus Renovation Project Completed", date: "Feb 15, 2026", excerpt: "The new science building is now open with state-of-the-art facilities..." },
  { title: "Annual Fundraiser Exceeds Goals", date: "Feb 10, 2026", excerpt: "Thanks to our generous alumni, we raised over $500K this year..." },
];

const News = () => (
  <PageShell title="News" description="Stay updated with the latest alumni and campus news.">
    <div className="max-w-3xl mx-auto space-y-6">
      {articles.map((a) => (
        <div key={a.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
          <p className="text-xs text-muted-foreground mb-2">{a.date}</p>
          <h3 className="font-semibold text-lg mb-2">{a.title}</h3>
          <p className="text-sm text-muted-foreground">{a.excerpt}</p>
        </div>
      ))}
    </div>
  </PageShell>
);

export default News;
