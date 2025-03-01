import React from "react";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Welcome to Our App
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop destination for amazing content and experiences.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              Get Started
            </h2>
            <p className="text-gray-600">
              Explore our features and discover what makes us unique.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3 text-gray-700">
              Learn More
            </h2>
            <p className="text-gray-600">
              Check out our documentation and resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
