import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageShellProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const PageShell = ({ title, description, children }: PageShellProps) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="py-20" style={{ background: "var(--hero-gradient)" }}>
      <div className="container text-center">
        <h1 className="text-4xl font-bold text-primary-foreground mb-3">{title}</h1>
        <p className="text-primary-foreground/80 max-w-xl mx-auto">{description}</p>
      </div>
    </section>
    <div className="container py-12">{children}</div>
    <Footer />
  </div>
);

export default PageShell;
