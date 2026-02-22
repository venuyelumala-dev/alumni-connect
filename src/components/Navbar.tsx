import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { LogOut, Menu, X } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const navLinks = ["Home", "Events", "Jobs", "Networking", "Leaderboard"];

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary">
          🎓 AlumniConnect
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={handleLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>
              <Link to="/login">
                <Button size="sm" variant="outline">Sign In</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-card p-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <a key={l} href="#" className="text-sm font-medium text-muted-foreground" onClick={() => setOpen(false)}>
              {l}
            </a>
          ))}
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}><Button size="sm" className="w-full">Dashboard</Button></Link>
              <Button size="sm" variant="ghost" className="w-full" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/signup" onClick={() => setOpen(false)}><Button size="sm" className="w-full">Sign Up</Button></Link>
              <Link to="/login" onClick={() => setOpen(false)}><Button size="sm" variant="outline" className="w-full">Sign In</Button></Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
