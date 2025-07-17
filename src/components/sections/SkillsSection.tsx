"use client";

import { useEffect, useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "Python", level: 95, category: "Programming", icon: "🐍" },
  { name: "Machine Learning", level: 90, category: "AI/ML", icon: "🤖" },
  { name: "Deep Learning", level: 85, category: "AI/ML", icon: "🧠" },
  { name: "TensorFlow", level: 88, category: "AI/ML", icon: "🔥" },
  { name: "PyTorch", level: 85, category: "AI/ML", icon: "⚡" },
  { name: "Kubernetes", level: 80, category: "DevOps", icon: "☸️" },
  { name: "Docker", level: 85, category: "DevOps", icon: "🐳" },
  { name: "Node.js", level: 90, category: "Backend", icon: "🟢" },
  { name: "PostgreSQL", level: 85, category: "Database", icon: "🐘" },
  { name: "Redis", level: 80, category: "Database", icon: "🔴" },
  { name: "AWS", level: 85, category: "Cloud", icon: "☁️" },
  { name: "Go", level: 75, category: "Programming", icon: "🐹" }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("skills");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI/ML": return "aurora-cyan";
      case "Backend": return "aurora-green";
      case "DevOps": return "aurora-lavender";
      case "Database": return "aurora-cyan";
      case "Cloud": return "aurora-green";
      default: return "aurora-cyan";
    }
  };

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-center mb-16">
            <span className="bg-gradient-to-r from-aurora-green to-aurora-cyan bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`relative transition-all duration-1000 delay-${index * 100} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-aurora-cyan/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                    </div>
                    <span className={`text-sm font-medium text-${getCategoryColor(skill.category)}`}>
                      {skill.category}
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r from-${getCategoryColor(skill.category)} to-${getCategoryColor(skill.category)}/70 transition-all duration-1000`}
                        style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                      />
                    </div>
                    <span className="absolute -top-6 right-0 text-sm text-white/70">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
