'use client';
import { Bot, Database, MessageSquare, Workflow, BarChart3, Shield, Sparkles } from 'lucide-react';

export default function RefinedServices() {
  const services = [
    {
      icon: Bot,
      title: "Custom AI Chatbots",
      description: "Intelligent conversational agents that handle customer queries, support tickets, and lead qualification 24/7.",
      features: ["Natural Language Processing", "Multi-platform Integration", "Custom Training"],
      accent: "#10B981"
    },
    {
      icon: Workflow,
      title: "Process Automation",
      description: "Streamline repetitive tasks and complex workflows with intelligent automation solutions.",
      features: ["Task Scheduling", "Data Processing", "Error Handling"],
      accent: "#D946EF"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect and synchronize data across multiple platforms and systems seamlessly.",
      features: ["API Integrations", "Real-time Sync", "Data Validation"],
      accent: "#F59E0B"
    },
    {
      icon: MessageSquare,
      title: "Communication Automation",
      description: "Automate email marketing, social media posting, and customer communication workflows.",
      features: ["Email Campaigns", "Social Media", "SMS Automation"],
      accent: "#A855F7"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Generate automated reports and insights from your business data with AI-powered analytics.",
      features: ["Custom Dashboards", "Predictive Analytics", "Automated Reports"],
      accent: "#6B46C1"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Automated testing and monitoring systems to ensure your operations run smoothly.",
      features: ["Error Detection", "Performance Monitoring", "Automated Testing"],
      accent: "#10B981"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Refined background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-[#D946EF]/20 to-[#F59E0B]/15 rounded-full blur-3xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-[#A855F7]/20 to-[#6B46C1]/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s', animationDuration: '10s'}} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#D946EF]/40 bg-gradient-to-r from-[#D946EF]/10 to-[#F59E0B]/10 text-[#D946EF] text-sm font-bold tracking-wide backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4" />
            <span>PREMIUM SERVICES</span>
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-extralight text-white mb-8 tracking-tight">
            Our AI Automation
            <span className="font-light bg-gradient-to-r from-[#A855F7] via-[#D946EF] to-[#F59E0B] bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl font-light text-gray-100 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating custom automation solutions that transform how your business operates. 
            From simple task automation to complex AI-driven workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-to-br from-[#6B46C1]/25 to-[#1a0b2e]/50 backdrop-blur-md border-2 border-[#A855F7]/0 p-8 hover:border-[#D946EF]/0 transition-all duration-300 hover:shadow-xl hover:shadow-[#D946EF]/10"
              >
                <div className="mb-8">
                  <div 
                    className="bg-gradient-to-r from-[#A855F7]/25 to-[#D946EF]/25 border-2 border-[#A855F7]/0 p-6 w-fit group-hover:scale-105 transition-transform duration-300 shadow-md"
                    style={{boxShadow: `0 0 15px ${service.accent}30`}}
                  >
                    <IconComponent className="h-10 w-10" style={{color: service.accent}} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-medium text-white mb-6 group-hover:text-[#D946EF] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-200 mb-8 leading-relaxed font-light text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300 font-medium">
                      <div 
                        className="w-3 h-3 rounded-full mr-4 shadow-sm"
                        style={{backgroundColor: service.accent, boxShadow: `0 0 6px ${service.accent}50`}}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button 
                  className="text-lg font-bold hover:text-white transition-colors flex items-center space-x-2"
                  style={{color: service.accent}}
                >
                  <span>Learn More</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#A855F7]/30 via-[#D946EF]/40 to-[#F59E0B]/30 backdrop-blur-md border-2 border-[#D946EF]/0 p-12 text-white shadow-xl shadow-[#D946EF]/15">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-[#F59E0B] bg-clip-text text-transparent">Need Something Custom?</h3>
            <p className="text-gray-100 mb-8 max-w-3xl mx-auto font-light leading-relaxed text-lg">
              Every business is unique. We create tailored automation solutions that fit your specific requirements and integrate seamlessly with your existing systems.
            </p>
            <button 
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#F59E0B] via-[#D946EF] to-[#A855F7] text-black px-12 py-4 font-bold text-lg hover:shadow-xl hover:shadow-[#F59E0B]/30 transition-all duration-300 hover:scale-[1.02]"
            >
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
