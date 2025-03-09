import { faker } from "@faker-js/faker";

const generateDroneData = () => ({
  // Basic Info
  company_name: faker.company.name(),
  company_email: faker.internet.email(),
  industry: faker.helpers.arrayElement([
    "agriculture",
    // "construction",
    // "defense",
    // "real_estate",
    // "film_media",
    // "surveying",
    // "research",
  ]),

  // Drone Requirements
  purpose: faker.helpers.arrayElement([
    // "film",
    // "surveying",
    // "agriculture",
    "research",
  ]),
  operating_environment: faker.helpers.arrayElement([
    "urban_areas",
    // "rural_fields",
    // "forests_mountains",
    // "industrial_sites",
  ]),

  // Generate a random number between 500 and 20,000 that is a multiple of 10
  price: Math.floor(faker.number.int({ min: 200, max: 30000 }) / 10) * 10,

  experience_level: faker.number.int({ min: 1, max: 4 }),

  // Technical Specs
  flight_time: Math.floor(faker.number.int({ min: 4, max: 120 }) / 10) * 10,

  flight_range: Math.floor(faker.number.int({ min: 0, max: 50 }) / 1) * 5,

  camera_quality: faker.helpers.arrayElement([0, 720, 1080, 4000, 6000, -1]),

  // obstacle_avoidance: faker.helpers.arrayElement(["TRUE", "FALSE"]),
  obstacle_avoidance: faker.helpers.arrayElement(["TRUE"]),

  autonomous_features: faker.helpers.arrayElements(
    [
      "GPS Waypoint Navigation",
      "Follow Me Mode",
      "Return to Home",
      "Geofencing",
      "Object Tracking",
    ],
    faker.number.int({ min: 1, max: 5 })
  ),
  portability: faker.helpers.arrayElement([
    "Compact & Foldable",
    "Regular Drone",
  ]),
  connectivity_options: faker.helpers.arrayElements(
    ["WiFi", "5G / LTE", "Remote Controller Only", "Mobile App"],
    faker.number.int({ min: 1, max: 4 })
  ),
  // live_streaming: faker.helpers.arrayElement(["TRUE", "FALSE"]),
  live_streaming: faker.helpers.arrayElement(["TRUE"]),

  // Additional Details
  payload_capacity:
    Math.floor(faker.number.int({ min: 0, max: 10000 }) / 10) * 10,

  wind_resistance: faker.number.int({ min: 5, max: 30 }),
  // night_vision: faker.helpers.arrayElement(["TRUE", "FALSE"]),
  night_vision: faker.helpers.arrayElement(["TRUE"]),
});

// console.log(JSON.stringify(generateDroneData, null, 2));
export const generateMultipleDroneData = (count = 1) => {
  return Array.from({ length: count }, generateDroneData);
};

// Export a single drone data generator
export const generateSingleDroneData = generateDroneData;
