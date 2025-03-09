import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLocation } from "react-router-dom";
import getDrones from "../services/apiDrones";
import {
  generateMultipleDroneData,
  generateSingleDroneData,
} from "../data/dronesData";
import supabase from "../config/supabase";
import { useMatchDrones } from "../features/Drones/useMatchDrones";

export default function ResultsPage() {
  const location = useLocation();
  const formData = location.state?.formData;

  console.log(formData);
  console.log(typeof formData.experience_level);

  const { isLoading, matchingDrones, error } = useMatchDrones(formData);

  // const singleDrone = generateSingleDroneData();

  // Generate multiple drones
  const tenDrones = generateMultipleDroneData(20);

  // async function handleUploadDrones() {
  //   try {
  //     const { data, error } = await supabase
  //       .from("Drones") // replace 'drones' with your actual table name
  //       .insert(tenDrones);

  //     if (error) {
  //       console.error("Error uploading drones:", error);
  //       // You might want to show an error message to the user here
  //     } else {
  //       console.log("Successfully uploaded drones:", data);
  //       // You might want to show a success message to the user here
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Drone Recommendations</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">
          Based on your requirements:
        </h2>
        <h1>Form data</h1>
        <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
          {/* {formData.map((data) => {
            console.log(data, typeof data);
          })} */}
          {JSON.stringify(formData, null, 2)}
        </pre>
        <h1>Supabase comparison</h1>
        <pre className="bg-gray-50 p-4 rounded-md overflow-auto">
          {isLoading
            ? "Loading..."
            : error
            ? "Error loading recommendations"
            : JSON.stringify(matchingDrones, null, 2)}
        </pre>
      </div>
    </div>
  );
}
