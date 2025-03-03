import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import getDrones from "../services/apiDrones";

export default function ResultsPage() {
  const location = useLocation();
  const formData = location.state?.formData;


  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Drone Recommendations</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Based on your requirements:
        </h2>
        <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
}
