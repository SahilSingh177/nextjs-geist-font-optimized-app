"use client";

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
];

export function Navigation({ activeSection }: NavigationProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-cosmic-blue/80 backdrop-blur-md rounded-full px-6 py-3 border border-aurora-cyan/20">
      <div className="flex items-center space-x-6">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
              activeSection === item.id
                ? "text-aurora-cyan bg-aurora-cyan/10"
                : "text-white/70 hover:text-aurora-cyan hover:bg-aurora-cyan/5"
            }`}
          >
            {item.label}
            {activeSection === item.id && (
              <div className="absolute inset-0 rounded-full bg-aurora-cyan/20 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}
