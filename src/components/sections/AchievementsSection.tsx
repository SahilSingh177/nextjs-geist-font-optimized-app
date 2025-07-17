"use client";

import { useEffect, useState } from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top 10 AI Researcher Award",
    description: "Recognized among the top 10 AI researchers globally by AI Innovators Association.",
    date: "2023"
  },
  {
    id: 2,
    title: "Best Paper Award",
    description: "Received best paper award at the International Conference on Machine Learning (ICML).",
    date: "2022"
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Contributed significant features to popular ML frameworks and libraries.",
    date: "2021"
  },
  {
    id: 4,
    title: "Hackathon Winner",
    description: "Won first place in Global AI Hackathon for innovative ML pipeline design.",
    date: "2020"
  }
];

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("achievements");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold font-inter text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="bg-gradient-to-r from-aurora-cyan to-aurora-green bg-clip-text text-transparent">
            Competitive Achievements
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`bg-cosmic-blue/50 backdrop-blur-sm border border-aurora-cyan/20 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-aurora-cyan/40 hover:bg-cosmic-blue/70`}
              onClick={() => setExpandedId(expandedId === achievement.id ? null : achievement.id)}
            >
              <h3 className="text-xl font-bold text-aurora-cyan mb-2">{achievement.title}</h3>
              <p className="text-white/80 mb-4">{achievement.date}</p>
              <div className={`overflow-hidden transition-all duration-500 ${expandedId === achievement.id ? "max-h-40" : "max-h-0"}`}>
                <p className="text-white/70">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
