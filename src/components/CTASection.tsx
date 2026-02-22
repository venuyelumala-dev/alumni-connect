import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
        Ready to Reconnect with Your Alumni Network?
      </h2>
      <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
        Join thousands of graduates who are already benefiting from our vibrant community. Your network is your net worth.
      </p>
      <Link to="/signup">
        <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8">
          Get Started Today
        </Button>
      </Link>
    </div>
  </section>
);

export default CTASection;
