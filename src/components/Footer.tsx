const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container grid md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-lg mb-3">🎓 AlumniConnect</h3>
        <p className="text-sm text-primary-foreground/60">Building bridges between generations of graduates worldwide.</p>
      </div>
      {[
        { title: "Platform", links: ["Directory", "Events", "Jobs", "Mentorship"] },
        { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
        { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
      ].map((col) => (
        <div key={col.title}>
          <h4 className="font-semibold mb-3">{col.title}</h4>
          <ul className="space-y-2">
            {col.links.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="container mt-8 pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/40">
      © 2026 AlumniConnect. All rights reserved.
    </div>
  </footer>
);

export default Footer;
