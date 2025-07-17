"use client";

import { useEffect, useState } from "react";

interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  achievements: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    company: "TechCorp AI",
    position: "Senior Software Engineer",
    duration: "2022 - Present",
    description: "Leading AI/ML infrastructure development and scalable backend systems for enterprise solutions.",
    technologies: ["Python", "TensorFlow", "Kubernetes", "AWS", "PostgreSQL"],
    achievements: [
      "Architected ML pipeline processing 10M+ daily requests",
      "Reduced model inference latency by 40%",
      "Led team of 5 engineers in AI platform development"
    ]
  },
  {
    id: 2,
    company: "DataFlow Systems",
    position: "Machine Learning Engineer",
    duration: "2020 - 2022",
    description: "Developed and deployed machine learning models for real-time data processing and analytics.",
    technologies: ["Python", "PyTorch", "Docker", "Apache Kafka", "Redis"],
    achievements: [
      "Built real-time recommendation system serving 1M+ users",
      "Improved model accuracy by 25% through feature engineering",
      "Implemented automated ML model deployment pipeline"
    ]
  },
  {
    id: 3,
    company: "StartupLab",
    position: "Full Stack Developer",
    duration: "2018 - 2020",
    description: "Full-stack development of web applications with focus on backend scalability and performance.",
    technologies: ["Node.js", "React", "MongoDB", "GraphQL", "AWS"],
    achievements: [
      "Developed MVP that secured $2M in Series A funding",
      "Optimized database queries reducing response time by 60%",
      "Built microservices architecture handling 100K+ concurrent users"
    ]
  }
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("experience");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-center mb-16">
            <span className="bg-gradient-to-r from-aurora-green to-aurora-cyan bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aurora-cyan via-aurora-lavender to-aurora-green" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-aurora-cyan rounded-full border-4 border-cosmic-blue animate-pulse" />

                {/* Experience card */}
                <div className="ml-20 group">
                  <div
                    className="bg-cosmic-blue/50 backdrop-blur-sm border border-aurora-cyan/20 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-aurora-cyan/40 hover:bg-cosmic-blue/70"
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold font-inter text-aurora-cyan group-hover:text-aurora-lavender transition-colors duration-300">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg font-medium text-aurora-green">
                          {exp.company}
                        </h4>
                      </div>
                      <span className="text-white/60 font-poppins text-sm mt-2 md:mt-0">
                        {exp.duration}
                      </span>
                    </div>

                    <p className="text-white/80 font-poppins mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-aurora-lavender/10 border border-aurora-lavender/30 rounded-full text-aurora-lavender text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Expand/Collapse indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-aurora-cyan text-sm font-medium">
                        {expandedId === exp.id ? "Hide Details" : "View Achievements"}
                      </span>
                      <div className={`transform transition-transform duration-300 ${expandedId === exp.id ? "rotate-180" : ""}`}>
                        <svg className="w-5 h-5 text-aurora-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>

                    {/* Expanded content */}
                    <div className={`overflow-hidden transition-all duration-500 ${expandedId === exp.id ? "max-h-96 mt-4" : "max-h-0"}`}>
                      <div className="border-t border-aurora-cyan/20 pt-4">
                        <h5 className="text-aurora-green font-medium mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start text-white/80 text-sm">
                              <div className="w-2 h-2 bg-aurora-cyan rounded-full mt-2 mr-3 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-aurora-green/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/3 left-10 w-32 h-32 bg-aurora-lavender/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "3s" }} />
      </div>
    </section>
  );
}
