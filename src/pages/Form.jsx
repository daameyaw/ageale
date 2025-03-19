// flight- time, automated flight,
// deploy time

import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  Chip,
  OutlinedInput,
  Slider,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getDrones from "../services/apiDrones";
import { generateMultipleDroneData } from "../data/dronesData";
import supabase from "../config/supabase";

const steps = [
  "Basic Info",
  "Drone Requirements",
  "Technical Specs",
  "Additional Details",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const marks = [
  { value: 0, label: "$500", figure: 500 },
  { value: 20, label: "$1,000", figure: 1000 },
  { value: 40, label: "$3,000", figure: 3000 },
  { value: 60, label: "$5,000", figure: 5000 },
  { value: 80, label: "$10,000", figure: 10000 },
  { value: 100, label: "20,000+", figure: 20000 },
];

const valuetext = (value) => {
  const mark = marks.find((mark, index) => {
    const nextMark = marks[index + 1];
    return value >= mark.value && (!nextMark || value < nextMark.value);
  });
  return mark?.figure || "";
};

const formatBudgetRangeMin = (values) => {
  const minValue = valuetext(values?.[0]);
  // const maxValue = valuetext(values?.[1]);
  console.log(typeof minValue, minValue);
  return minValue;
};

const formatBudgetRangeMax = (values) => {
  // const minValue = valuetext(values?.[0]);
  const maxValue = valuetext(values?.[1]);
  console.log(maxValue);
  return maxValue;
};

const FLIGHT_TIME_OPTIONS = [
  { label: "Less than 10 minutes", value: 0 },
  { label: "10 - 20 minutes", value: 10 },
  { label: "20 - 40 minutes", value: 20 },
  { label: "40 - 60 minutes", value: 40 },
  { label: "More than 60 minutes", value: 60 },
];
const FLIGHT_RANGE_OPTIONS = [
  { label: "Below 1km", value: 0 },
  { label: "1 - 5 km", value: 1 },
  { label: "5 - 10 km", value: 5 },
  { label: "More than 10 km", value: 10 },
];

const CAMERA_QUALITY_OPTIONS = [
  { label: "No camera needed", value: 0 },
  { label: "720p (HD)", value: 720 },
  { label: "1080p (Full HD)", value: 1080 },
  { label: "4K (Ultra HD)", value: 4000 },
  { label: "6K or higher", value: 6000 },
  { label: "Thermal / Infrared Camera", value: -1 }, // Special category
];
const PAYLOAD_CAPACITY_OPTIONS = [
  { label: "No payload required", value: 0 }, // No payload is essentially 0
  { label: "Less than 500g", value: 500 },
  { label: "500g - 1kg", value: 1000 },
  { label: "1kg - 3kg", value: 3000 },
  { label: "More than 3kg", value: 5000 }, // You can use 5000 as a max or any higher value depending on your needs
];

const WIND_RESISTANCE_OPTIONS = [
  { label: "Low (0-10 mph)", value: 0 }, // Use the lower bound of the range (0 mph)
  { label: "Medium (10-20 mph)", value: 10 }, // Use the lower bound (10 mph)
  { label: "High (20-30 mph)", value: 20 }, // Use the lower bound (20 mph)
  { label: "Extreme (30+ mph)", value: 30 }, // Use the lower bound (30 mph)
];

const AUTONOMOUS_FEATURES = [
  "GPS Waypoint Navigation",
  "Follow Me Mode",
  "Return to Home",
  "Geofencing",
  "Object Tracking",
];

const CONNECTIVITY_OPTIONS = [
  "WiFi",
  "5G / LTE",
  "Remote Controller Only",
  "Mobile App",
];

function Form() {
  const { isLoading, data: drones } = useQuery({
    queryKey: ["drones"],
    queryFn: getDrones,
  });

  console.log(drones);

  const [activeStep, setActiveStep] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   budget_range: [20, 60],
    // budget_range_string: "$1000 - $5000",
    budget_range_min: 1000,
    budget_range_max: 5000,
    //   flight_time: "",
    //   flight_range: "",
    //   camera_quality: "",
    //   payload_capacity: "",
    //   wind_resistance: "",
    obstacle_avoidance: "No",
    //   autonomous_features: [],
    //   connectivity_options: [],
    //   live_streaming: false,
    //   night_vision: false,
    //   portability: "Regular Drone",
    // },
  });

  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const onSliderChange = (event, newValue) => {
    console.log(newValue);
    // setValue("budget_range", newValue);
    setValue("budget_range_min", formatBudgetRangeMin(newValue));
    setValue("budget_range_max", formatBudgetRangeMax(newValue));
  };

  // const onSliderChange = (event, newValue) => {
  //   console.log(newValue); // This should log a number or an array (if range)

  //   setValue("budget_range", newValue); // Store the numeric value directly

  //   // Ensure min and max values are stored separately if it's a range slider
  //   if (Array.isArray(newValue)) {
  //     setValue("budget_range_min", newValue[0]);
  //     setValue("budget_range_max", newValue[1]);
  //   } else {
  //     setValue("budget_range_min", formatBudgetRangeMin(newValue));
  //     setValue("budget_range_max", formatBudgetRangeMax(newValue));
  //   }
  // };

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      // budget_range_min: formatBudgetRangeMin(data.budget_range_min),
      // budget_range_max: formatBudgetRangeMax(data.budget_range_max),
    };
    console.log("Form submitted:", formattedData);
    handleNext();
    if (activeStep === 3) {
      navigate("/results", { state: { formData: formattedData } });
    }
  };

  // Generate one drone
  const tenDrones = generateMultipleDroneData(30);

  async function handleUploadDrones() {
    try {
      const { data, error } = await supabase
        .from("Drones") // replace 'drones' with your actual table name
        .insert(tenDrones);

      if (error) {
        console.error("Error uploading drones:", error);
        // You might want to show an error message to the user here
      } else {
        console.log("Successfully uploaded drones:", data);
        // You might want to show a success message to the user here
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
<div className=" bg-[url('/drone.jpg')] bg-cover bg-center  min-h-screen w-full ">  
    <div className="w-[80%] mx-auto    ">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className="w-[80%] mx-auto min-h-[80vh] bg-white shadow-2xl rounded-lg mt-18">
        {activeStep === 0 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b-2 border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 p-4 pb-0">
                PERSONAL INFORMATION
              </h2>
              <button
                onClick={handleUploadDrones}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Upload drones
              </button>
            </div>

            <div className="mb-4 flex justify-between gap-18 p-4">
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Company Name</label>
                <input
                  {...register("company_name", {
                    required: "Company name is required",
                  })}
                  type="text"
                  className="border p-1 border-gray-200 rounded"
                />
                {errors.company_name && (
                  <p className="text-red-400">{errors.company_name.message}</p>
                )}
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Industry</label>
                <select
                  {...register("industry", {
                    required: "Please select an industry",
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select an industry
                  </option>
                  <option value="agriculture">Agriculture</option>
                  {/* <option value="construction">Construction</option> */}
                  <option value="defense">Defense</option>
                  {/* <option value="real_estate">Real Estate</option> */}
                  {/* <option value="film_media">Film & Media</option> */}
                  {/* <option value="surveying">Surveying & Mapping</option> */}
                  <option value="research">Research & Education</option>
                </select>
                {errors.industry && (
                  <p className="text-red-400">{errors.industry.message}</p>
                )}
              </div>
            </div>

            <div className="w-1/2 flex flex-col gap-2 p-4">
              <label className="">Company Email</label>
              <input
                {...register("company_email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                className="border p-1 border-gray-200 rounded"
                placeholder="example.com@gmail.com"
              />
              {errors.company_email && (
                <p className="text-red-400">{errors.company_email.message}</p>
              )}
            </div>

            <div className="flex justify-between p-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={activeStep === 0}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}
        {/* drone requirements */}
        {activeStep === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b-2 border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 p-4 pb-0">
                DRONE REQUIREMENTS
              </h2>
            </div>
            <div className="mb-4 flex justify-between gap-18 p-4">
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Usage Purpose</label>
                <select
                  {...register("purpose", {
                    required: "Purpose is required",
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select what you intend to use the drone for...
                  </option>
                  {/* <option value="film">Aerial Photography & Videography</option> */}
                  <option value="surveying">Surveying & Mapping</option>
                  <option value="agriculture">Agriculture & Farming</option>
                  <option value="research">Research </option>
                  {/* <option value="forestry">Forestry</option> */}
                </select>
                {errors.purpose && (
                  <p className="text-red-400">{errors.industry.message}</p>
                )}
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Operating Environment</label>
                <select
                  {...register("operating_environment", {
                    required: "Please select an operating environ",
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select an operating environment
                  </option>
                  <option value="urban_areas">Urban Areas</option>
                  <option value="rural_fields">Rural & Open Fields</option>
                  {/* <option value="forests_mountains">Forests & Mountains</option>
                  <option value="industrial_sites">Industrial Sites</option> */}
                  {/* <option value="forestry">Forestry</option> */}
                </select>
                {errors.environment && (
                  <p className="text-red-400">{errors.industry.message}</p>
                )}
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2 p-4">
              <label className="font-medium">Budget Range</label>
              <div className="px-4 py-6">
                <Slider
                  {...register("budget_range_string")}
                  aria-label="Budget Range"
                  defaultValue={[20, 60]}
                  valueLabelDisplay="auto"
                  valueLabelFormat={valuetext}
                  step={null}
                  marks={marks}
                  onChange={onSliderChange}
                  className="text-blue-600"
                  sx={{
                    "& .MuiSlider-thumb": {
                      backgroundColor: "#2563eb",
                    },
                    "& .MuiSlider-track": {
                      backgroundColor: "#2563eb",
                    },
                    "& .MuiSlider-rail": {
                      backgroundColor: "#e5e7eb",
                    },
                    "& .MuiSlider-mark": {
                      backgroundColor: "#2563eb",
                    },
                    "& .MuiSlider-markLabel": {
                      fontSize: "0.875rem",
                      fontWeight: "500",
                    },
                  }}
                />
              </div>
              {errors.budget_range_string && (
                <p className="text-red-400">
                  {errors.budget_range_string.message}
                </p>
              )}
            </div>{" "}
            <div className="mb-4 flex flex-col gap-2 p-4">
              <label className="font-medium mb-2">Level of Experience</label>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Beginner", value: 1 },
                  { label: "Intermediate", value: 2 },
                  { label: "Advanced", value: 3 },
                  { label: "Professional", value: 4 },
                ].map(({ label, value }) => (
                  <label
                    key={value}
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                  >
                    <input
                      type="radio"
                      value={Number(value)}
                      {...register("experience_level", {
                        required: "Please select your experience level",
                        valueAsNumber: true, // Ensures the value is stored as a number
                      })}
                      className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
              {errors.experience_level && (
                <p className="text-red-400 mt-1">
                  {errors.experience_level.message}
                </p>
              )}
            </div>
            <div className="flex justify-between p-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={activeStep === 0}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}
        {activeStep === 2 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b-2 border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 p-4 pb-0">
                TECHNICAL SPECS
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-6 p-4">
              {/* Flight Time Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">
                  🔋 Flight Time (Battery Life)
                </label>
                <select
                  {...register("flight_time", {
                    required: "Flight time is required",
                    valueAsNumber: true, // Ensures the value is stored as a number
                  })}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select flight time...</option>
                  {FLIGHT_TIME_OPTIONS.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.flight_time && (
                  <p className="text-red-400">{errors.flight_time.message}</p>
                )}
              </div>
              {/* Flight Range Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">📏 Maximum Flight Range</label>
                <select
                  {...register("flight_range", {
                    required: "Flight range is required",
                    valueAsNumber: true, // Ensures the value is stored as a number
                  })}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select flight range...</option>
                  {FLIGHT_RANGE_OPTIONS.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.flight_range && (
                  <p className="text-red-400">{errors.flight_range.message}</p>
                )}
              </div>{" "}
              {/* Camera Quality Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">📷 Camera Quality</label>
                <select
                  {...register("camera_quality", {
                    required: "Camera quality is required",
                    valueAsNumber: true, // Ensures the value is stored as a number
                  })}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select camera quality...</option>
                  {CAMERA_QUALITY_OPTIONS.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {errors.camera_quality && (
                  <p className="text-red-400">
                    {errors.camera_quality.message}
                  </p>
                )}
              </div>{" "}
              {/* Toggle Switches */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <label className="font-medium">
                    🛡 Obstacle Avoidance System
                  </label>
                  <div className="flex gap-4">
                    {[
                      { label: "Yes", value: true },
                      { label: "No", value: false },
                    ].map((option) => (
                      <label
                        key={option.label}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register("obstacle_avoidance", {
                            required: "Please select an option",
                          })}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{option.label}</span>
                      </label>
                    ))}
                  </div>
                  {errors.obstacle_avoidance && (
                    <p className="text-red-400">
                      {errors.obstacle_avoidance.message}
                    </p>
                  )}{" "}
                </div>
              </div>
              {/* Autonomous Features Checkboxes */}
              <div className="col-span-2">
                <label className="font-medium block mb-2">
                  🤖 Autonomous Flight Features
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {AUTONOMOUS_FEATURES.map((feature) => (
                    <label key={feature} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={feature}
                        {...register("autonomous_features")}
                        className="rounded border-gray-300 text-blue-600"
                      />
                      <span>{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Portability Radio Buttons */}
              <div className="col-span-2">
                <label className="font-medium block mb-2">
                  �� Portability & Foldability
                </label>
                <div className="flex gap-4">
                  {["Compact & Foldable", "Regular Drone"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        value={option}
                        {...register("portability", {
                          required: "Please select portability",
                        })}
                        className="text-blue-600"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Connectivity Options Checkboxes */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">📶 Connectivity Options</label>
                <div className="grid grid-cols-2 gap-3">
                  {CONNECTIVITY_OPTIONS.map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                    >
                      <input
                        type="checkbox"
                        value={option}
                        {...register("connectivity_options")}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
              {/* Live Streaming Radio Buttons */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">
                  🎥 Live Streaming Capabilities
                </label>
                <div className="flex gap-4">
                  {[
                    { label: "Yes", value: true },
                    { label: "No", value: false },
                  ].map((option) => (
                    <label
                      key={option.label}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                    >
                      <input
                        type="radio"
                        value={option.value}
                        {...register("live_streaming", {
                          required: "Please select an option",
                        })}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
                {errors.live_streaming && (
                  <p className="text-red-400">
                    {errors.live_streaming.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between p-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={activeStep === 0}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </form>
        )}
        {activeStep === 3 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b-2 border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 p-4 pb-0">
                ADDITIONAL DETAILS
              </h2>
            </div>
            <div className="mb-4 flex justify-between gap-18 p-4">
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Payload Capacity</label>
                <select
                  {...register("payload_capacity", {
                    required: "Payload capacity is required",
                    valueAsNumber: true,
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select payload capacity
                  </option>
                  {PAYLOAD_CAPACITY_OPTIONS.map((option) => (
                    <option key={option.value} value={Number(option.value)}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.payload_capacity && (
                  <p className="text-red-400">
                    {errors.payload_capacity.message}
                  </p>
                )}
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Wind Resistance</label>
                <select
                  {...register("wind_resistance", {
                    required: "Wind resistance is required",
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select wind resistance
                  </option>
                  {WIND_RESISTANCE_OPTIONS.map((option) => (
                    <option key={option.label} value={Number(option.value)}>
                      {/* Use the numeric value */}
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.wind_resistance && (
                  <p className="text-red-400">
                    {errors.wind_resistance.message}
                  </p>
                )}
              </div>
            </div>
            <div className="mb-4 flex flex-col gap-2 p-4">
              <label className="font-medium">Night Vision</label>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                  <input
                    type="radio"
                    value="TRUE"
                    {...register("night_vision")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                  <input
                    type="radio"
                    value="FALSE"
                    {...register("night_vision")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">No</span>
                </label>
              </div>
              {errors.night_vision && (
                <p className="text-red-400 mt-1">
                  {errors.night_vision.message}
                </p>
              )}
            </div>
            <div className="flex justify-between p-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={activeStep === 0}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
