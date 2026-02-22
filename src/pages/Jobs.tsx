import PageShell from "@/components/PageShell";
import { Briefcase, MapPin, DollarSign } from "lucide-react";

const jobs = [
  { title: "Senior Software Engineer", company: "TechCorp Inc.", location: "Remote", salary: "$120K - $160K" },
  { title: "Marketing Manager", company: "BrandCo", location: "New York, NY", salary: "$85K - $110K" },
  { title: "Data Analyst", company: "DataDriven LLC", location: "Austin, TX", salary: "$75K - $95K" },
  { title: "Product Designer", company: "DesignStudio", location: "San Francisco, CA", salary: "$100K - $130K" },
];

const Jobs = () => (
  <PageShell title="Career Opportunities" description="Explore job postings shared by fellow alumni and partner companies.">
    <div className="max-w-3xl mx-auto space-y-4">
      {jobs.map((j) => (
        <div key={j.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer">
          <h3 className="font-semibold text-lg">{j.title}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><Briefcase className="w-4 h-4" /> {j.company}</p>
          <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {j.location}</span>
            <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {j.salary}</span>
          </div>
        </div>
      ))}
    </div>
  </PageShell>
);

export default Jobs;
