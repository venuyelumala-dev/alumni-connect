import PageShell from "@/components/PageShell";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const alumni = [
  { name: "Alice Martin", year: "2018", field: "Computer Science", location: "San Francisco" },
  { name: "Bob Williams", year: "2020", field: "Business Administration", location: "New York" },
  { name: "Carol Davis", year: "2015", field: "Engineering", location: "London" },
  { name: "Dan Lee", year: "2019", field: "Design", location: "Tokyo" },
  { name: "Eva Garcia", year: "2021", field: "Data Science", location: "Berlin" },
  { name: "Frank Brown", year: "2017", field: "Marketing", location: "Toronto" },
];

const Directory = () => (
  <PageShell title="Alumni Directory" description="Connect with fellow graduates from around the world.">
    <div className="max-w-3xl mx-auto">
      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input placeholder="Search alumni by name, field, or location..." className="pl-10" />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {alumni.map((a) => (
          <div key={a.name} className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <span className="font-semibold text-primary">{a.name[0]}</span>
            </div>
            <h3 className="font-semibold">{a.name}</h3>
            <p className="text-sm text-muted-foreground">{a.field} • Class of {a.year}</p>
            <p className="text-xs text-muted-foreground mt-1">📍 {a.location}</p>
          </div>
        ))}
      </div>
    </div>
  </PageShell>
);

export default Directory;
