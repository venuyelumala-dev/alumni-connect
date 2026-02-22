import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState, useRef } from "react";
import type { User } from "@supabase/supabase-js";
import { LogOut, Menu, X, ChevronDown, LogIn, Bell } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "News", path: "/news" },
  { label: "Jobs", path: "/jobs" },
  { label: "Networking", path: "/networking" },
  { label: "Alumni Compass", path: "/alumni-compass" },
  { label: "Leaderboard", path: "/leaderboard" },
];

const moreLinks = [
  { label: "Directory", path: "/directory" },
  { label: "Dashboard", path: "/dashboard" },
];

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const moreRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
    });
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null));
    return () => subscription.unsubscribe();
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (signInRef.current && !signInRef.current.contains(e.target as Node)) setSignInOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary shrink-0">
          🎓 AlumniConnect
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(l.path)
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div ref={moreRef} className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              More <ChevronDown className="w-3 h-3" />
            </button>
            {moreOpen && (
              <div className="absolute top-full right-0 mt-1 w-44 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                {moreLinks.map((l) => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                    onClick={() => setMoreOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden lg:flex items-center gap-2">
          {user ? (
            <>
              <Link to="/dashboard">
                <Button size="sm">Dashboard</Button>
              </Link>
              <Button size="sm" variant="ghost" onClick={handleLogout} title="Logout">
                <LogOut className="w-4 h-4" />
              </Button>
              <Bell className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
              </Link>

              {/* Sign In dropdown */}
              <div ref={signInRef} className="relative">
                <button
                  onClick={() => setSignInOpen(!signInOpen)}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium border border-border rounded-md text-muted-foreground hover:text-foreground transition-colors"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In
                  <ChevronDown className="w-3 h-3" />
                </button>
                {signInOpen && (
                  <div className="absolute top-full right-0 mt-1 w-48 bg-card border border-border rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                      onClick={() => setSignInOpen(false)}
                    >
                      Sign In with Email
                    </Link>
                    <div className="border-t border-border my-1" />
                    <Link
                      to="/signup"
                      className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                      onClick={() => setSignInOpen(false)}
                    >
                      Create Account
                    </Link>
                  </div>
                )}
              </div>

              <Bell className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors relative">
              </Bell>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card p-4 flex flex-col gap-2">
          {[...navLinks, ...moreLinks].map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                isActive(l.path) ? "text-primary bg-primary/5" : "text-muted-foreground"
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="border-t border-border my-2" />
          {user ? (
            <>
              <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full">Dashboard</Button>
              </Link>
              <Button size="sm" variant="ghost" className="w-full" onClick={handleLogout}>Logout</Button>
            </>
          ) : (
            <>
              <Link to="/signup" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full">Sign Up</Button>
              </Link>
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button size="sm" variant="outline" className="w-full">Sign In</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
