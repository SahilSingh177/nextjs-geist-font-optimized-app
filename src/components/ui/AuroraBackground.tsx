"use client";

export function AuroraBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Deep cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue via-cosmic-blue to-slate-900" />
      
      {/* Aurora waves */}
      <div className="absolute inset-0">
        <div className="aurora-wave aurora-wave-1" />
        <div className="aurora-wave aurora-wave-2" />
        <div className="aurora-wave aurora-wave-3" />
      </div>
      
      {/* Cosmic particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="cosmic-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 20}s`,
            }}
          />
        ))}
      </div>
      
      {/* Nebula effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="nebula nebula-1" />
        <div className="nebula nebula-2" />
        <div className="nebula nebula-3" />
      </div>
    </div>
  );
}
