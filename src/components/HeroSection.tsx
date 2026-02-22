import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section
    className="relative py-24 md:py-32 text-center"
    style={{ background: "var(--hero-gradient)" }}
  >
    <div className="container relative z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-4">
        Welcome to <span className="text-accent">AlumniConnect</span>
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
        Your gateway to a global network of successful graduates. Connect, grow, and give back to your alma mater community.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/signup">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
            Join Our Community
          </Button>
        </Link>
        <Link to="/directory">
          <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
            Explore Directory
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default HeroSection;
