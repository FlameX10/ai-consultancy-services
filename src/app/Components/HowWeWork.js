'use client';
import { Play, ExternalLink } from 'lucide-react';

export default function RefinedHowWeWork() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#A855F7]/20 to-[#D946EF]/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '6s'}} />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-[#6B46C1]/25 to-[#A855F7]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s', animationDuration: '8s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
            See How We
            <span className="font-light bg-gradient-to-r from-[#A855F7] to-[#D946EF] bg-clip-text text-transparent"> Transform</span>
            <br />Businesses
          </h2>
          <p className="text-lg font-light text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Watch our process in action and discover how we've helped companies achieve 
            85% efficiency improvements through intelligent automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video Player */}
          <div className="relative group">
            <div className="aspect-video bg-gradient-to-br from-[#6B46C1]/30 to-[#A855F7]/20 border-2 border-[#D946EF]/0 backdrop-blur-sm rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/50 to-[#A855F7]/30" />
                <button className="relative z-10 w-20 h-20 bg-gradient-to-r from-[#D946EF] to-[#F59E0B] rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#D946EF]/30">
                  <Play className="h-8 w-8 text-black ml-1" fill="currentColor" />
                </button>
                <div className="absolute bottom-4 left-4 text-white/90 text-sm font-light">
                  ▶ Our Complete Process (3:45)
                </div>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-4 h-4 border border-[#D946EF]/0 bg-[#6B46C1] flex items-center justify-center">
              <div className="w-1 h-1 bg-[#D946EF] rounded-full animate-pulse" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-light text-white">
                From Consultation to 
                <span className="text-[#D946EF]"> Deployment</span>
              </h3>
              
              <div className="space-y-4">
                {[
                  { step: "01", title: "Discovery Call", desc: "We analyze your current processes and identify automation opportunities" },
                  { step: "02", title: "Custom Design", desc: "Our team creates tailored workflows using n8n and Make.com" },
                  { step: "03", title: "Implementation", desc: "We deploy and integrate solutions with your existing systems" },
                  { step: "04", title: "Optimization", desc: "Continuous monitoring and improvements for maximum efficiency" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-8 h-8 border border-[#A855F7]/0 text-[#D946EF] text-xs font-medium flex items-center justify-center flex-shrink-0 group-hover:border-[#D946EF]/0 transition-colors duration-300">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="text-white font-light mb-1">{item.title}</h4>
                      <p className="text-gray-200 text-sm font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button 
                onClick={() => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center space-x-2 text-[#D946EF] hover:text-[#F59E0B] transition-colors duration-300 text-sm font-light border-b border-[#D946EF]/50 hover:border-[#F59E0B] pb-1"
              >
                <span>View Our Workflow Examples</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
