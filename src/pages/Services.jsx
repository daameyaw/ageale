import React from 'react';
import { HeartHandshake, GraduationCap, Wrench, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Consulting & Implementation",
    description: "Expert guidance on drone integration and workflow optimization",
    icon: HeartHandshake,
    features: [
      "Custom solution design",
      "Workflow optimization",
      "ROI analysis",
      "Integration planning"
    ]
  },
  {
    title: "Training & Certification",
    description: "Comprehensive training programs for drone operators and data analysts",
    icon: GraduationCap,
    features: [
      "Pilot certification",
      "Software training",
      "Data processing",
      "Best practices"
    ]
  },
  {
    title: "Technical Support",
    description: "24/7 global technical support and maintenance services",
    icon: Wrench,
    features: [
      "Remote assistance",
      "On-site support",
      "Maintenance plans",
      "Software updates"
    ]
  },
  {
    title: "Data Processing",
    description: "Professional data processing and analysis services",
    icon: BarChart3,
    features: [
      "Point cloud processing",
      "Orthomosaic generation",
      "AI-powered analysis",
      "Custom reporting"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive drone solutions and support services to help you maximize the potential of your aerial operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <service.icon className="text-blue-600 mr-4" size={32} />
                <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>

        {/* Service Process */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Service Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Initial meeting to understand your needs"
              },
              {
                step: "02",
                title: "Planning",
                description: "Detailed solution design and timeline"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Expert deployment and setup"
              },
              {
                step: "04",
                title: "Support",
                description: "Ongoing assistance and optimization"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact our team to learn how we can help optimize your drone operations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center">
            Contact Us <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}