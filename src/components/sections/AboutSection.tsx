"use client";

import { useEffect, useState } from "react";

export function AboutSection() {
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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-inter text-center mb-16">
            <span className="bg-gradient-to-r from-aurora-cyan to-aurora-lavender bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar/Photo Section */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl bg-gradient-to-br from-aurora-cyan via-aurora-lavender to-aurora-green p-1">
                <div className="w-full h-full rounded-2xl bg-cosmic-blue flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for actual photo */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-6xl font-bold text-aurora-cyan">SS</span>
                  </div>
                  
                  {/* Aurora overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-aurora-cyan/10 via-transparent to-aurora-lavender/10 animate-pulse" />
                </div>
              </div>
              
              {/* Floating elements around avatar */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-aurora-green/30 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-aurora-lavender/30 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-aurora-cyan/30 rounded-full animate-bounce" style={{ animationDelay: "2s" }} />
            </div>
          </div>

          {/* Content Section */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-6">
              <div className="group">
                <h3 className="text-2xl font-bold font-inter text-aurora-cyan mb-4 group-hover:text-aurora-lavender transition-colors duration-300">
                  Passionate Problem Solver
                </h3>
                <p className="text-white/80 font-poppins leading-relaxed">
                  I'm a dedicated software engineer with a deep fascination for artificial intelligence and machine learning. 
                  My journey in technology is driven by curiosity and the desire to create intelligent solutions that make a meaningful impact.
                </p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold font-inter text-aurora-green mb-4 group-hover:text-aurora-cyan transition-colors duration-300">
                  Technical Excellence
                </h3>
                <p className="text-white/80 font-poppins leading-relaxed">
                  Specializing in scalable backend systems, I architect robust solutions that handle complex data processing 
                  and machine learning workflows. My expertise spans from distributed systems to cutting-edge AI implementations.
                </p>
              </div>

              <div className="group">
                <h3 className="text-2xl font-bold font-inter text-aurora-lavender mb-4 group-hover:text-aurora-green transition-colors duration-300">
                  Continuous Learning
                </h3>
                <p className="text-white/80 font-poppins leading-relaxed">
                  The rapidly evolving landscape of AI and technology fuels my passion for continuous learning. 
                  I stay at the forefront of emerging technologies, contributing to research and open-source projects.
                </p>
              </div>

              {/* Interactive highlights */}
              <div className="flex flex-wrap gap-3 mt-8">
                {["AI Enthusiast", "System Architect", "Open Source Contributor", "Research Minded"].map((tag, index) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-aurora-cyan/10 border border-aurora-cyan/30 rounded-full text-aurora-cyan text-sm font-medium hover:bg-aurora-cyan/20 hover:scale-105 transition-all duration-300 cursor-default"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-aurora-cyan/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-aurora-lavender/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
}
