import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, MapPin, Phone, Mail, ArrowRight, Globe, CheckCircle2, BarChart3, Compass, Building2, Trees, Mountain, Camera, Brain, Cpu } from 'lucide-react';

const solutions = {
  mapping: {
    title: "Mapping & Surveying",
    description: "High-precision aerial mapping and surveying solutions for professional surveyors and GIS experts.",
    features: [
      "RTK/PPK positioning for survey-grade accuracy",
      "Automated flight planning and execution",
      "Compatible with major photogrammetry software",
      "Rapid data collection over large areas",
      "High-resolution orthomosaics and DEMs"
    ],
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Compass
  },
  ai: {
    title: "AI & Machine Learning",
    description: "Advanced artificial intelligence solutions for automated data analysis and real-time decision making.",
    features: [
      "Real-time object detection and tracking",
      "Automated defect detection and classification",
      "AI-powered flight path optimization",
      "Machine learning for predictive maintenance",
      "Deep learning for terrain analysis"
    ],
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Brain
  },
  agriculture: {
    title: "Agriculture & Precision Farming",
    description: "Advanced agricultural mapping solutions for crop monitoring and precision farming applications.",
    features: [
      "Multispectral imaging for crop health analysis",
      "NDVI mapping capabilities",
      "Automated field boundary detection",
      "Crop stress detection and monitoring",
      "Integration with farm management software"
    ],
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Trees
  },
  construction: {
    title: "Construction & Infrastructure",
    description: "Comprehensive site monitoring and progress tracking solutions for construction projects.",
    features: [
      "Regular site progress documentation",
      "Volumetric calculations and stockpile measurements",
      "As-built verification",
      "Safety inspection and monitoring",
      "BIM integration capabilities"
    ],
    image: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Building2
  },
  mining: {
    title: "Mining & Quarrying",
    description: "Specialized solutions for mine planning, operation, and rehabilitation monitoring.",
    features: [
      "Accurate stockpile measurements",
      "Pit and dump progress monitoring",
      "Blast planning and analysis",
      "Environmental compliance monitoring",
      "Regular site documentation"
    ],
    image: "https://images.unsplash.com/photo-1518611507436-f9221403cca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Mountain
  },
  environmental: {
    title: "Environmental Monitoring",
    description: "Comprehensive solutions for environmental assessment and monitoring projects.",
    features: [
      "Vegetation health monitoring",
      "Wildlife habitat mapping",
      "Coastal erosion tracking",
      "Water body monitoring",
      "Environmental impact assessment"
    ],
    image: "https://images.unsplash.com/photo-1572204292164-b35ba943fca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    icon: Camera
  }
};

export default function Home() {
  const [activeSection, setActiveSection] = React.useState('mapping');

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Professional Drone Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Empowering professionals with cutting-edge drone technology for mapping, surveying, and aerial intelligence.
              </p>
              <div className="flex space-x-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center" onClick={()=> navigate("/form")}>
                ✨ Let's help you find a drone <ChevronRight className="ml-2" size={20} />
                </button>
                <Link to="/learn" className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Drone in action"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600">Comprehensive drone solutions for every industry</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Solutions Navigation */}
            <div className="lg:col-span-1">
              <div className="space-y-2">
                {Object.entries(solutions).map(([key, solution]) => (
                  <button
                    key={key}
                    onClick={() => setActiveSection(key)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center space-x-3 transition-colors ${
                      activeSection === key
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <solution.icon size={20} />
                    <span>{solution.title}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Solution Details */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={solutions[activeSection].image}
                  alt={solutions[activeSection].title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {solutions[activeSection].title}
                  </h3>
                  <p className="text-xl text-gray-600 mb-8">
                    {solutions[activeSection].description}
                  </p>
                  <div className="space-y-4">
                    {solutions[activeSection].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle2 className="text-blue-600" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex space-x-4">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors flex items-center">
                      Request Demo <ArrowRight className="ml-2" size={20} />
                    </button>
                    <Link to="/learn" className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <BarChart3 className="text-blue-600 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Data Analytics</h4>
                  <p className="text-gray-600">
                    Advanced data processing and analysis tools for actionable insights.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Cpu className="text-blue-600 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Processing</h4>
                  <p className="text-gray-600">
                    Edge AI processing for real-time analysis and decision making.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <Globe className="text-blue-600 mb-4" size={32} />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Support</h4>
                  <p className="text-gray-600">
                    Worldwide network of certified professionals and support teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SenseFly</h2>
            <p className="text-xl text-gray-600">Industry-leading drone solutions for professional applications</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Precision",
                description: "Advanced artificial intelligence for automated analysis and decision making.",
                image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Data Analytics",
                description: "Advanced analytics and processing tools for meaningful insights.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Expert Support",
                description: "Comprehensive training and support from industry experts.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img src={feature.image} alt={feature.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <Link to="/learn" className="mt-4 text-blue-600 font-medium flex items-center">
                    Learn more <ArrowRight className="ml-2" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}