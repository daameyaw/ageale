import React from 'react';
import { Shield, Users, Globe, Clock } from 'lucide-react';

const aboutStats = [
  {
    number: "50+",
    label: "Countries",
    description: "Global presence and support"
  },
  {
    number: "10K+",
    label: "Customers",
    description: "Trusted by professionals"
  },
  {
    number: "15+",
    label: "Years",
    description: "Industry experience"
  },
  {
    number: "24/7",
    label: "Support",
    description: "Always here to help"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">About SenseFly</h1>
            <p className="text-xl text-gray-600 mb-8">
              Since 2009, SenseFly has been the leading provider of professional drone solutions, 
              revolutionizing the way professionals work with innovative aerial imaging technology.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Shield className="text-blue-600 mr-4" size={24} />
                <span className="text-gray-700">Industry-leading safety standards</span>
              </div>
              <div className="flex items-center">
                <Users className="text-blue-600 mr-4" size={24} />
                <span className="text-gray-700">Expert team of professionals</span>
              </div>
              <div className="flex items-center">
                <Globe className="text-blue-600 mr-4" size={24} />
                <span className="text-gray-700">Global presence and support network</span>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-600 mr-4" size={24} />
                <span className="text-gray-700">Proven track record of innovation</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="SenseFly Team"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {aboutStats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-blue-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-xl">
            To empower professionals with cutting-edge drone technology and solutions that 
            transform the way they work, making aerial data collection safer, more efficient, 
            and more accessible than ever before.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Journey</h2>
          <div className="space-y-12">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right pr-8">
                <div className="text-xl font-bold text-blue-600">2009</div>
              </div>
              <div className="w-0.5 bg-blue-600 h-full relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1"></div>
              </div>
              <div className="flex-grow pl-8 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Company Founded</h3>
                <p className="text-gray-600">SenseFly was established with a vision to revolutionize aerial imaging.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right pr-8">
                <div className="text-xl font-bold text-blue-600">2015</div>
              </div>
              <div className="w-0.5 bg-blue-600 h-full relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1"></div>
              </div>
              <div className="flex-grow pl-8 pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Expansion</h3>
                <p className="text-gray-600">Expanded operations to over 50 countries worldwide.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-24 text-right pr-8">
                <div className="text-xl font-bold text-blue-600">2020</div>
              </div>
              <div className="w-0.5 bg-blue-600 h-full relative">
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1"></div>
              </div>
              <div className="flex-grow pl-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">AI Integration</h3>
                <p className="text-gray-600">Launched advanced AI-powered drone solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}