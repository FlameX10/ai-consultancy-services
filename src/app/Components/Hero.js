'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Grid3X3, Workflow, Activity, Zap, Sparkles } from 'lucide-react';

export default function RefinedHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({ workflows: 0, efficiency: 0, support: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counting animation for stats
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setStats({
          workflows: Math.floor(150 * progress),
          efficiency: Math.floor(85 * progress),
          support: Math.floor(24 * progress) // For 24/7, we'll show 24
        });
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setStats({ workflows: 150, efficiency: 85, support: 24 });
        }
      }, stepDuration);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const scrollToContact = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Refined Global CSS with toned down animations */}
      <style jsx global>{`
        @keyframes gentleGlow {
          0%, 100% { 
            box-shadow: 0 0 15px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(217, 70, 239, 0.4), 0 0 40px rgba(217, 70, 239, 0.15);
          }
        }
        
        @keyframes subtleFloat {
          0%, 100% { 
            transform: translateX(0) translateY(0) scale(1);
            opacity: 0.4;
          }
          50% { 
            transform: translateX(20px) translateY(-15px) scale(1.02);
            opacity: 0.6;
          }
        }
        
        @keyframes smoothFlow {
          0% { 
            background-position: 0% 50%;
          }
          50% { 
            background-position: 100% 50%;
          }
          100% { 
            background-position: 0% 50%;
          }
        }

        .animate-gentleGlow {
          animation: gentleGlow 4s ease-in-out infinite;
        }
        .animate-subtleFloat {
          animation: subtleFloat 15s ease-in-out infinite;
        }
        .animate-smoothFlow {
          animation: smoothFlow 8s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>

      <section 
        id="hero" 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        {/* Toned down moving background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-gradient-to-r from-[#A855F7]/40 via-[#D946EF]/25 to-[#F59E0B]/30 rounded-full blur-3xl animate-subtleFloat" />
          <div className="absolute bottom-20 right-20 w-[400px] h-[400px] bg-gradient-to-l from-[#6B46C1]/35 via-[#A855F7]/20 to-[#D946EF]/25 rounded-full blur-2xl animate-subtleFloat" style={{animationDelay: '5s'}} />
          <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-[#D946EF]/30 to-[#F59E0B]/20 rounded-full blur-xl animate-subtleFloat" style={{animationDelay: '10s'}} />
        </div>

        {/* Subtle background grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none z-1">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(217,70,239,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Refined floating accents */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#D946EF]/30 to-[#F59E0B]/30 rounded-full blur-3xl animate-gentleGlow z-1" />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-[#6B46C1]/40 to-[#A855F7]/40 rounded-full blur-2xl animate-gentleGlow z-1" style={{animationDelay: '2s'}} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className={`space-y-12 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}>
              
              {/* Refined Badge */}
              <div className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#D946EF]/40 bg-gradient-to-r from-[#D946EF]/10 to-[#F59E0B]/10 text-[#D946EF] text-sm font-medium tracking-wide backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                <span>AI Workflow Automation</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-extralight text-white leading-[0.85] tracking-tight">
                  <span className="inline-block bg-gradient-to-r from-[#ffffff] via-[#D946EF] to-[#F59E0B] bg-clip-text text-transparent animate-smoothFlow">
                    Intelligent
                  </span>
                  <br />
                  <span className="font-light bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#F59E0B] bg-clip-text text-transparent">
                    Automation
                  </span>
                  <br />
                  <span className="text-gray-200">Solutions</span>
                </h1>
                
                <p className="text-xl font-light text-gray-100 leading-relaxed max-w-lg">
                  We design and implement custom AI workflows that streamline your operations, 
                  eliminate repetitive tasks, and accelerate growth through intelligent automation.
                </p>
              </div>

              {/* Photo Spaces */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="aspect-video bg-gradient-to-br from-[#A855F7]/20 to-[#D946EF]/20 border-2 border-[#A855F7]/0 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs text-[#D946EF] font-medium">Photo Space 1</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#6B46C1]/20 to-[#A855F7]/20 border-2 border-[#6B46C1]/0 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs text-[#D946EF] font-medium">Photo Space 2</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center space-x-6">
                <button 
                  onClick={scrollToContact}
                  className="group relative flex items-center space-x-4 px-12 py-5 bg-gradient-to-r from-[#D946EF] via-[#A855F7] to-[#F59E0B] text-black hover:from-[#F59E0B] hover:to-[#D946EF] transition-all duration-300 text-lg font-bold tracking-wide shadow-xl shadow-[#D946EF]/30 hover:shadow-[#F59E0B]/40 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#F59E0B] rounded blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
                  
                  <span>Start Project</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-lg font-medium text-[#D946EF] hover:text-[#F59E0B] transition-colors duration-300 tracking-wide border-b-2 border-[#D946EF]/50 hover:border-[#F59E0B] pb-1"
                >
                  View Services
                </button>
              </div>

              {/* Stats */}
              <div 
                className={`grid grid-cols-3 gap-12 pt-12 transform transition-all duration-1000 delay-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div className="space-y-2 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#D946EF] to-[#F59E0B] bg-clip-text text-transparent">
                    {stats.workflows}+
                  </div>
                  <div className="text-xs font-medium text-gray-100 tracking-widest uppercase">Workflows</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#A855F7] to-[#D946EF] bg-clip-text text-transparent">
                    {stats.efficiency}%
                  </div>
                  <div className="text-xs font-medium text-gray-100 tracking-widest uppercase">Efficiency</div>
                </div>
                <div className="space-y-2 text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#F59E0B] to-[#D946EF] bg-clip-text text-transparent">
                    {stats.support}/7
                  </div>
                  <div className="text-xs font-medium text-gray-100 tracking-widest uppercase">Support</div>
                </div>
              </div>
            </div>

            {/* Right Visual Element */}
            <div 
              className={`relative transform transition-all duration-1000 delay-500 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
            >
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#6B46C1]/40 to-[#1a0b2e]/70 backdrop-blur-md border-2 border-[#A855F7]/40 p-10">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 border-2 border-[#D946EF]/0 flex items-center justify-center">
                      <Grid3X3 className="h-4 w-4 text-[#D946EF]" />
                    </div>
                    <span className="text-lg font-medium tracking-wide text-white">Workflow Engine</span>
                  </div>
                  <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse shadow-md shadow-[#10B981]/40" />
                </div>

                {/* Workflow Items */}
                <div className="space-y-8">
                  {[
                    { 
                      icon: Activity, 
                      title: "Data Processing", 
                      status: "Active",
                      progress: "100%",
                      color: "#10B981"
                    },
                    { 
                      icon: Workflow, 
                      title: "Task Automation", 
                      status: "Running",
                      progress: "78%",
                      color: "#D946EF"
                    },
                    { 
                      icon: Grid3X3, 
                      title: "Integration Layer", 
                      status: "Syncing",
                      progress: "45%",
                      color: "#F59E0B"
                    }
                  ].map((item, index) => (
                    <div 
                      key={item.title}
                      className="flex items-center justify-between p-6 border border-[#A855F7]/30 hover:border-[#D946EF]/50 transition-all duration-300 bg-gradient-to-r from-[#6B46C1]/20 to-[#1a0b2e]/40 backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-6">
                        <div className="w-12 h-12 border-2 border-gray-300/0 flex items-center justify-center hover:border-[#D946EF]/0 transition-colors duration-300">
                          <item.icon className="h-6 w-6" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-white">{item.title}</div>
                          <div className="text-sm text-gray-200">{item.status}</div>
                        </div>
                      </div>
                      <div className="text-sm font-bold" style={{ color: item.color }}>{item.progress}</div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-10 pt-8 border-t border-[#A855F7]/0 flex items-center justify-between">
                  <span className="text-sm font-bold text-white tracking-widest uppercase">
                    System Status
                  </span>
                  <span className="text-sm font-bold text-[#10B981] bg-[#10B981]/10 px-3 py-1 border border-[#10B981]/30">
                    Optimal
                  </span>
                </div>
              </div>

              {/* Floating indicator */}
              <div className="absolute -top-3 -right-3 w-6 h-6 border-2 border-[#D946EF]/0 bg-[#6B46C1] flex items-center justify-center">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse" />
              </div>

              {/* Subtle accent glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#A855F7]/20 to-[#D946EF]/20 blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
