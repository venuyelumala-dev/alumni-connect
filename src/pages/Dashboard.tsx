import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

type Submission = { id: string; name: string; message: string | null; created_at: string };

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/login");
      else setUser(session.user);
    });
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) navigate("/login");
      else setUser(session.user);
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  useEffect(() => {
    if (user) fetchSubmissions();
  }, [user]);

  const fetchSubmissions = async () => {
    const { data } = await supabase.from("submissions").select("*").order("created_at", { ascending: false });
    if (data) setSubmissions(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    const { error } = await supabase.from("submissions").insert({ name, message, user_id: user.id });
    setLoading(false);
    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Submitted!" });
      setName("");
      setMessage("");
      fetchSubmissions();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-12 max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground mb-8">Welcome, {user?.email}</p>

        <div className="bg-card rounded-lg border border-border p-6 mb-8">
          <h2 className="font-semibold text-lg mb-4">New Submission</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            <Textarea placeholder="Message (optional)" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Button disabled={loading}>{loading ? "Submitting..." : "Submit"}</Button>
          </form>
        </div>

        <h2 className="font-semibold text-lg mb-4">Your Submissions</h2>
        {submissions.length === 0 ? (
          <p className="text-muted-foreground text-sm">No submissions yet.</p>
        ) : (
          <div className="space-y-3">
            {submissions.map((s) => (
              <div key={s.id} className="bg-card rounded-lg border border-border p-4">
                <p className="font-medium">{s.name}</p>
                {s.message && <p className="text-sm text-muted-foreground mt-1">{s.message}</p>}
                <p className="text-xs text-muted-foreground mt-2">{new Date(s.created_at).toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
