import React from "react";

export default function FormV2() {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Move to the next step
  const nextStep = () => setStep(step + 1);

  // Move to the previous step
  const prevStep = () => setStep(step - 1);
  return (
    <div className="w-[80%] mx-auto  mt-6 bg-white shadow-lg rounded-lg">
      <div className="border-b-2 border-gray-200">
        <h2 className="text-2xl font-semibold mb-2 p-4 pb-0">
          PERSONAL INFORMATION
        </h2>
        <div></div>
      </div>

      {/* Work Experience */}
      <div className="mb-4 flex justify-between gap-18 p-4">
        <div className="w-1/2 flex flex-col gap-2">
          <label className="">Company Name</label>
          <input
            type="text"
            className=" border p-1 border-gray-200 rounded "
            // placeholder="0 Months"
          />
          <p className="text-red-400">Error</p>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <label className="">Industry</label>
          <select className="border p-1 border-gray-200 rounded ">
            <option value="" disabled selected className="py-2">
              Select an industry
            </option>
            <option value="agriculture" className="py-2">
              Agriculture
            </option>
            <option value="construction" className="py-2">
              Construction
            </option>
            <option value="defense" className="py-2">
              Defense
            </option>
            <option value="public_safety" className="py-2">
              Public Safety
            </option>
            <option value="forestry" className="py-2">
              Forestry
            </option>
          </select>
        </div>
      </div>

      {/* Research Papers */}
      <div className="w-1/2 flex flex-col gap-2 p-4">
        <label className="">Company Email</label>
        <input
          type="text"
          className=" border p-1 border-gray-200 rounded "
          placeholder="example.com@gmail.com"
        />
        <p className="text-red-400">Error</p>
      </div>

      {/* Projects */}

      {/* Rating Sliders */}
      {/* <div className="space-y-4">
        {["Statement of Purpose", "Letters of Recommendation", "Résumé"].map(
          (item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item}</span>
                <span className="text-sm bg-yellow-400 text-white px-2 py-1 rounded">
                  Premium Exclusive
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                defaultValue="3"
                className="w-1/2"
              />
              <span className="text-lg font-semibold">3</span>
            </div>
          )
        )}
      </div> */}

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="text-orange-500 font-medium">Back</button>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg">
          Find Universities
        </button>
      </div>
    </div>
  );
}
