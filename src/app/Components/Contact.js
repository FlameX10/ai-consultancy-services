'use client';
import { Calendar, Clock, Video, CheckCircle } from 'lucide-react';

export default function RefinedBookingSection() {
  const benefits = [
    {
      icon: Video,
      title: "Free Strategy Session",
      description: "30-minute consultation to discuss your automation needs"
    },
    {
      icon: CheckCircle,
      title: "Custom Proposal",
      description: "Tailored solution roadmap with timeline and pricing"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Get started within 48 hours of our initial call"
    }
  ];

  return (
    <section id="booking" className="py-20 relative overflow-hidden">
      {/* Gentle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-[#A855F7]/15 to-[#D946EF]/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-[#6B46C1]/20 to-[#A855F7]/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-extralight text-white mb-6 tracking-tight">
            Ready to
            <span className="font-light bg-gradient-to-r from-[#A855F7] to-[#D946EF] bg-clip-text text-transparent"> Automate</span>
            <br />Your Business?
          </h2>
          <p className="text-lg font-light text-gray-100 max-w-3xl mx-auto leading-relaxed">
            Book a free strategy session to discover how AI automation can transform your operations. 
            No commitment required – just valuable insights tailored to your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Calendly Embed Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#6B46C1]/30 to-[#1a0b2e]/60 backdrop-blur-sm border-2 border-[#A855F7]/0 p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-16 w-16 text-[#D946EF] mx-auto mb-4" />
                <h3 className="text-white font-light text-xl mb-2">Calendly Integration</h3>
                <p className="text-gray-300 font-light text-sm mb-6">
                  Your Calendly booking widget will be embedded here
                </p>
                <a 
                  href="https://calendly.com/your-link-placeholder" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-[#D946EF] to-[#F59E0B] text-black font-medium hover:shadow-lg hover:shadow-[#D946EF]/30 transition-all duration-300"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Strategy Call</span>
                </a>
              </div>
            </div>

            <div className="absolute -top-2 -right-2 w-4 h-4 border border-[#D946EF]/0 bg-[#6B46C1] flex items-center justify-center">
              <div className="w-1 h-1 bg-[#D946EF] rounded-full animate-pulse" />
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light text-white mb-6">
                What You'll Get in Our
                <span className="text-[#D946EF]"> Strategy Session</span>
              </h3>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#A855F7]/20 to-[#D946EF]/20 border border-[#A855F7]/0 flex items-center justify-center flex-shrink-0 group-hover:border-[#D946EF]/0 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-[#D946EF]" />
                    </div>
                    <div>
                      <h4 className="text-white font-light text-lg mb-2">{benefit.title}</h4>
                      <p className="text-gray-300 font-light leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-8 border-t border-[#A855F7]/0">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 font-light">Duration</span>
                  <span className="text-[#D946EF] font-light">30 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 font-light">Format</span>
                  <span className="text-[#D946EF] font-light">Video call</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 font-light">Cost</span>
                  <span className="text-[#D946EF] font-light">100% Free</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300 font-light">Next Steps</span>
                  <span className="text-[#D946EF] font-light">Custom proposal</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#A855F7]/20 to-[#D946EF]/20 border border-[#D946EF]/0 p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-light text-white mb-4">
              Not Ready to Book? No Problem.
            </h3>
            <p className="text-gray-200 font-light mb-6 leading-relaxed">
              Explore our workflow examples or reach out with specific questions about your automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('workflows')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-[#D946EF] hover:text-[#F59E0B] transition-colors duration-300 font-light border-b border-[#D946EF]/0 hover:border-[#F59E0B]/0 pb-1"
              >
                View Workflow Examples
              </button>
              <span className="text-gray-400 hidden sm:block">•</span>
              <a 
                href="mailto:hello@autoflowai.com" 
                className="text-[#D946EF] hover:text-[#F59E0B] transition-colors duration-300 font-light border-b border-[#D946EF]/0 hover:border-[#F59E0B]/0 pb-1"
              >
                Send us an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
