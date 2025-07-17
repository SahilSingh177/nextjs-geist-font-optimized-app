"use client";

import { useEffect, useState } from "react";

interface Publication {
  id: number;
  title: string;
  description: string;
  link: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Deep Learning for Scalable Backend Systems",
    description: "Exploring the integration of deep learning techniques in scalable backend architectures.",
    link: "https://example.com/publication1"
  },
  {
    id: 2,
    title: "AI-Driven Optimization in Cloud Environments",
    description: "Research on AI methods to optimize resource allocation in cloud computing.",
    link: "https://example.com/publication2"
  },
  {
    id: 3,
    title: "Machine Learning Pipelines for Real-Time Analytics",
    description: "Designing efficient ML pipelines for real-time data processing and analytics.",
    link: "https://example.com/publication3"
  }
];

export function ResearchSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("research");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="research" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold font-inter text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="bg-gradient-to-r from-aurora-lavender to-aurora-cyan bg-clip-text text-transparent">
            Research & Publications
          </span>
        </h2>

        <div className="space-y-8">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className={`bg-cosmic-blue/50 backdrop-blur-sm border border-aurora-lavender/30 rounded-xl p-6 transition-all duration-300 hover:border-aurora-lavender/50 hover:bg-cosmic-blue/70 cursor-pointer`}
            >
              <h3 className="text-xl font-bold text-aurora-lavender mb-2">{pub.title}</h3>
              <p className="text-white/80 mb-4">{pub.description}</p>
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aurora-cyan underline hover:text-aurora-green transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
