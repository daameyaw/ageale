import React from 'react';
import { BookOpen, Code, Cpu, Globe, Shield, Users, Zap, CheckCircle2 } from 'lucide-react';

const technologies = [
  {
    title: "AI & Machine Learning",
    description: "Our advanced AI systems process aerial data in real-time, providing instant insights and automated decision-making capabilities.",
    features: [
      "Deep learning for object detection",
      "Automated flight path optimization",
      "Real-time data processing",
      "Predictive maintenance",
      "Anomaly detection"
    ],
    icon: Cpu
  },
  {
    title: "Precision Mapping",
    description: "Industry-leading mapping technology that delivers survey-grade accuracy and detailed terrain analysis.",
    features: [
      "RTK/PPK positioning",
      "Photogrammetry processing",
      "3D point cloud generation",
      "Terrain modeling",
      "Volume calculations"
    ],
    icon: Globe
  },
  {
    title: "Data Security",
    description: "Enterprise-grade security measures ensure your data remains protected throughout collection, processing, and storage.",
    features: [
      "End-to-end encryption",
      "Secure data transmission",
      "Compliance with regulations",
      "Access control",
      "Audit logging"
    ],
    icon: Shield
  }
];

const resources = [
  {
    title: "Documentation",
    description: "Comprehensive guides and technical documentation for all our products and services.",
    icon: BookOpen,
    link: "#"
  },
  {
    title: "API Reference",
    description: "Detailed API documentation for developers integrating with our platform.",
    icon: Code,
    link: "#"
  },
  {
    title: "Community",
    description: "Join our community of drone professionals and share knowledge.",
    icon: Users,
    link: "#"
  }
];

export default function Learn() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Understanding Our Technology
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dive deep into the advanced technologies and solutions that power our drone systems,
            enabling professionals to achieve unprecedented levels of efficiency and accuracy.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <tech.icon className="text-blue-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{tech.title}</h3>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="space-y-3">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="text-blue-600 mr-3" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Data Collection",
                description: "Automated drone flights capture high-resolution imagery and sensor data"
              },
              {
                step: "02",
                title: "Processing",
                description: "AI-powered systems process and analyze collected data"
              },
              {
                step: "03",
                title: "Analysis",
                description: "Advanced algorithms extract insights and generate reports"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Results delivered through our secure cloud platform"
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

        {/* Resources Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <resource.icon className="text-blue-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Hardware Specifications</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Flight Time</span>
                  <span className="font-semibold">Up to 45 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Range</span>
                  <span className="font-semibold">Up to 5 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Camera Resolution</span>
                  <span className="font-semibold">48 MP</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">GPS Accuracy</span>
                  <span className="font-semibold">±1 cm</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Software Capabilities</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Processing Speed</span>
                  <span className="font-semibold">Real-time</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">AI Model Accuracy</span>
                  <span className="font-semibold">99.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Cloud Storage</span>
                  <span className="font-semibold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Data Format Support</span>
                  <span className="font-semibold">All major formats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}