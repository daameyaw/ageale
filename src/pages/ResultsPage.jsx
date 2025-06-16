import { useLocation } from "react-router-dom";
import { useRankedDrones } from "../features/Drones/useRankedDrones";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData;

  console.log(formData);

  const { isLoading, rankedDrones, error } = useRankedDrones(formData);

  console.log("ranked" + rankedDrones);

  const cameraQualityLabels = {
    0: "No camera needed",
    720: "720p (HD)",
    1080: "1080p (Full HD)",
    4000: "4K (Ultra HD)",
    6000: "6K or higher",
    "-1": "Thermal / Infrared Camera", // Special case
  };
  

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        🚀 Recommended Drones for You
      </h1>

       {/* Button to navigate back to the search form */}
       <div className="flex justify-center mb-6">
       <button
  onClick={() => navigate("/form", { replace: true })}
  className="px-4 py-2 cursor-pointer bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
>
  🔄 Search Again
</button>
      </div>

      <div className="bg-gray-50 shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          🔍 Top Picks Based on Your Needs:
        </h2>

        {isLoading ? (
                      <div className="flex items-center justify-center h-screen">
                      <div className="text-gray-500 text-center text-2xl font-semibold">
                      <ClipLoader
        color="blue"
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />                       </div>
                   </div>
       
          // <p className="text-gray-500 text-center">⏳ Loading recommendations...</p>
        ) : error ? (
          <div className="flex items-center justify-center h-screen">
          <p className="text-gray-500 text-center text-4xl font-semibold">
          ❌ Error loading recommendations.           </p>
       </div>

          // <p className="text-red-500 text-center">❌ Error loading recommendations.</p>
        ) : rankedDrones.length === 0 ? (
            <div className="flex items-center justify-center h-screen">
               <p className="text-gray-500 text-center text-4xl font-semibold">
                  ⚠️ No matching drones found. Try searching again.
                </p>
            </div>
        ) : (
          <div className="space-y-6">
            {rankedDrones.map((drone) => (
              <div
                key={drone.id}
                className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center"
              >
                {/* 🖼️ Drone Image (Left) */}
                <div className="w-1/3 h-[350px] bg-gray-200 rounded-md flex items-center justify-center md:mr-6 mb-4 md:mb-0">
                  {/* <span className="text-gray-500 text-sm">📸 Drone Image</span> */}
                  <img src={drone.imageUrl} alt={drone.company_name} className="w-full h-full object-cover rounded-md" />
                </div>

                {/* 📌 Drone Details (Right) */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-blue-500">
                    🏢 {drone.company_name}
                  </h3>
                  <p className="text-semibold text-gray-600">🏭 Industry:                        {drone.industry.charAt(0).toUpperCase() + drone.industry.slice(1)}
                  </p>

                  {/* 📌 Two-Column Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <p className="text-gray-700">
                      🎯 <span className="font-semibold">Purpose:</span>{" "}
                       {drone.purpose.charAt(0).toUpperCase() + drone.purpose.slice(1)}
                 </p>
                 {/* <p>
                  <span>{drone.id}</span>
                 </p> */}
                    <p className="text-gray-700">
                      💰 <span className="font-semibold">Price:</span> ${drone.price}
                    </p>
                    <p className="text-gray-700">
                      ⏳ <span className="font-semibold">Flight Time:</span> {drone.flight_time} mins
                    </p>
                    <p className="text-gray-700">
                      📡 <span className="font-semibold">Range:</span> {drone.flight_range} km
                    </p>
                    <p className="text-gray-700">
                      📷 <span className="font-semibold">Camera Quality:</span>{" "}
                         {cameraQualityLabels[drone.camera_quality] || `${drone.camera_quality} MP`}
                          </p>                
                              <p className="text-gray-700">
                      📦 <span className="font-semibold">Payload Capacity:</span> {drone.payload_capacity} g
                    </p>
                    <p className="text-gray-700 col-span-2">
                      ⭐ <span className="font-semibold">Overall Score:</span> {drone.ranking_score.toFixed(2)}
                    </p>
                  </div>

                  {/* 📶 Connectivity Options */}
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-gray-600">
                      📶 Connectivity:
                    </span>
                    <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-2 gap-2">
                      {drone.connectivity_options.map((option, idx) => (
                        <li key={idx}>🔗 {option}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 🤖 Autonomous Features */}
                  <div className="mt-4">
                    <span className="text-sm font-semibold text-gray-600">
                      🤖 Autonomous Features:
                    </span>
                    <ul className="list-disc list-inside text-sm text-gray-600 grid grid-cols-2 gap-2">
                      {drone.autonomous_features.map((feature, idx) => (
                        <li key={idx}>✨ {feature}</li>
                      ))}
                    </ul>
                  </div>

                  {/* 🔍 Button for More Details */}
                  <button onClick={() => navigate("/contact")} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
  📞 Contact Us
</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
