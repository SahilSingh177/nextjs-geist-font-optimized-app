"use client";

import { useEffect, useState } from "react";
import { AnimatedAvatar } from "@/components/ui/AnimatedAvatar";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Interactive Aurora Glow following cursor */}
      <div
        className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle, rgba(14, 228, 228, 0.3) 0%, rgba(132, 120, 250, 0.2) 50%, transparent 70%)`,
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-20 text-center max-w-4xl mx-auto w-full">
        {/* Animated Avatar */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <AnimatedAvatar />
        </div>

        {/* Main heading with typewriter effect */}
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h1 className="text-5xl md:text-7xl font-bold font-inter mb-4">
            <span className="bg-gradient-to-r from-white via-aurora-cyan to-aurora-lavender bg-clip-text text-transparent">
              Sahil Singh
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-poppins text-aurora-cyan mb-6">
            Software Engineer • AI & ML Specialist
          </h2>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-lg md:text-xl text-white/80 font-poppins mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting intelligent solutions at the intersection of{" "}
            <span className="text-aurora-green font-medium">artificial intelligence</span>,{" "}
            <span className="text-aurora-lavender font-medium">machine learning</span>, and{" "}
            <span className="text-aurora-cyan font-medium">scalable systems</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <button
            onClick={scrollToAbout}
            className="group relative px-8 py-4 bg-gradient-to-r from-aurora-cyan to-aurora-lavender rounded-full font-medium text-cosmic-blue transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-aurora-cyan/25"
          >
            <span className="relative z-10">Explore My Work</span>
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
          
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 border-2 border-aurora-cyan rounded-full font-medium text-aurora-cyan transition-all duration-300 hover:bg-aurora-cyan hover:text-cosmic-blue hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex flex-col items-center text-white/60">
            <span className="text-sm font-poppins mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-aurora-cyan/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-aurora-cyan rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-aurora-cyan/30 rounded-full animate-float"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
