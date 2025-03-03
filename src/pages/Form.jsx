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
  { value: 0, label: "$500" },
  { value: 20, label: "$1,000" },
  { value: 40, label: "$3,000" },
  { value: 60, label: "$5,000" },
  { value: 80, label: "$10,000" },
  { value: 100, label: "$10,000+" },
];

const valuetext = (value) => {
  const mark = marks.find((mark, index) => {
    const nextMark = marks[index + 1];
    return value >= mark.value && (!nextMark || value < nextMark.value);
  });
  return mark?.label || "";
};

const formatBudgetRange = (values) => {
  const minValue = valuetext(values?.[0]);
  const maxValue = valuetext(values?.[1]);
  return `${minValue} - ${maxValue}`;
};

const FLIGHT_TIME_OPTIONS = [
  "Less than 10 minutes",
  "10 - 20 minutes",
  "20 - 40 minutes",
  "40 - 60 minutes",
  "More than 60 minutes",
];

const FLIGHT_RANGE_OPTIONS = [
  "Below 1km",
  "1 - 5 km",
  "5 - 10 km",
  "More than 10 km",
];

const CAMERA_QUALITY_OPTIONS = [
  "No camera needed",
  "720p (HD)",
  "1080p (Full HD)",
  "4K (Ultra HD)",
  "6K or higher",
  "Thermal / Infrared Camera",
];

const PAYLOAD_CAPACITY_OPTIONS = [
  "No payload required",
  "Less than 500g",
  "500g - 1kg",
  "1kg - 3kg",
  "More than 3kg",
];

const WIND_RESISTANCE_OPTIONS = [
  "Low (0-10 mph)",
  "Medium (10-20 mph)",
  "High (20-30 mph)",
  "Extreme (30+ mph)",
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
    budget_range_string: "$1,000 - $5,000",
    //   flight_time: "",
    //   flight_range: "",
    //   camera_quality: "",
    //   payload_capacity: "",
    //   wind_resistance: "",
    //   obstacle_avoidance: false,
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
    setValue("budget_range", newValue);
    setValue("budget_range_string", formatBudgetRange(newValue));
  };

  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      budget_range: formatBudgetRange(data.budget_range),
    };
    console.log("Form submitted:", formattedData);
    handleNext();
    if (activeStep === 3) {
      navigate("/results", { state: { formData: formattedData } });
    }
  };

  return (
    <div>
      <div className="w-[80%] mx-auto  bg-white  mt-12">
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      <div className="w-[80%] mx-auto min-h-[80vh] bg-white shadow-2xl rounded-lg mt-6">
        {activeStep === 0 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="border-b-2 border-gray-200">
              <h2 className="text-2xl font-semibold mb-2 p-4 pb-0">
                PERSONAL INFORMATION
              </h2>
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
                  <option value="construction">Construction</option>
                  <option value="defense">Defense</option>
                  <option value="public_safety">Public Safety</option>
                  <option value="forestry">Forestry</option>
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
                  <option value="Aerial_Photography_&_Videography">
                    Aerial Photography & Videography
                  </option>
                  <option value="Surveying_&_Mapping">
                    Surveying & Mapping
                  </option>
                  <option value="Agriculture_&_Farming">
                    Agriculture & Farming
                  </option>
                  <option value="Delivery_&_Logistics">
                    Delivery & Logistics
                  </option>
                  {/* <option value="forestry">Forestry</option> */}
                </select>
                {errors.purpose && (
                  <p className="text-red-400">{errors.industry.message}</p>
                )}
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <label className="">Operating Environment</label>
                <select
                  {...register("industry", {
                    required: "Please select an industry",
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select an operating environment
                  </option>
                  <option value="Urban_Areas">Urban Areas</option>
                  <option value="Rural_&_OpenFields">
                    Rural & Open Fields
                  </option>
                  <option value="Forests_&_Mountains">
                    Forests & Mountains
                  </option>
                  <option value="Industrial_Sites">Industrial Sites</option>
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
                  {...register("budget_range")}
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
              {errors.budget_range && (
                <p className="text-red-400">{errors.budget_range.message}</p>
              )}
            </div>{" "}
            <div className="mb-4 flex flex-col gap-2 p-4">
              <label className="font-medium mb-2">Level of Experience</label>
              <div className="flex flex-col gap-3">
                {["Beginner", "Intermediate", "Advanced", "Professional"].map(
                  (level) => (
                    <label
                      key={level}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                    >
                      <input
                        type="radio"
                        value={level}
                        {...register("experience_level", {
                          required: "Please select your experience level",
                        })}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{level}</span>
                    </label>
                  )
                )}
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
                  })}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select flight time...</option>
                  {FLIGHT_TIME_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
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
                  })}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select flight range...</option>
                  {FLIGHT_RANGE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.flight_range && (
                  <p className="text-red-400">{errors.flight_range.message}</p>
                )}
              </div>

              {/* Camera Quality Dropdown */}
              <div className="flex flex-col gap-2">
                <label className="font-medium">📸 Camera Quality</label>
                <select
                  {...register("camera_quality", {
                    required: "Camera quality is required",
                  })}
                  className="border p-2 rounded-md"
                >
                  <option value="">Select camera quality...</option>
                  {CAMERA_QUALITY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.camera_quality && (
                  <p className="text-red-400">
                    {errors.camera_quality.message}
                  </p>
                )}
              </div>

              {/* Toggle Switches */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <label className="font-medium">
                    🛡 Obstacle Avoidance System
                  </label>
                  <div className="flex gap-4">
                    {["Yes", "No"].map((option) => (
                      <label
                        key={option}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                      >
                        <input
                          type="radio"
                          value={option}
                          {...register("obstacle_avoidance", {
                            required: "Please select an option",
                          })}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <span className="text-gray-700">{option}</span>
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
                  {["Yes", "No"].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors"
                    >
                      <input
                        type="radio"
                        value={option}
                        {...register("live_streaming", {
                          required: "Please select an option",
                        })}
                        className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="text-gray-700">{option}</span>
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
                  })}
                  className="border p-1 border-gray-200 rounded"
                >
                  <option value="" disabled>
                    Select payload capacity
                  </option>
                  {PAYLOAD_CAPACITY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
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
                    <option key={option} value={option}>
                      {option}
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
                    value="Yes"
                    {...register("night_vision")}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Yes</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                  <input
                    type="radio"
                    value="No"
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
