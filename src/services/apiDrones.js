import supabase from "../config/supabase";

async function getDrones() {
  const { data, error } = await supabase.from("Drones").select("*");
  if (error) throw error;
  return data;
}

export default getDrones;

function calculateDroneScore(drone, userPreferences) {
  let score = 0;
  
  // Score based on price - higher score for prices further below max budget
  const priceScore = 100 * (1 - (drone.price / userPreferences.budget_range_max));
  score += Math.max(0, priceScore);

  // Score numeric features - more points for exceeding minimum requirements
  if (userPreferences.flight_time > 0) {
    score += Math.min(50, (drone.flight_time - userPreferences.flight_time) / 2);
  }
  if (userPreferences.flight_range > 0) {
    score += Math.min(50, (drone.flight_range - userPreferences.flight_range) / 2);
  }
  if (userPreferences.camera_quality > 0) {
    score += Math.min(50, (drone.camera_quality - userPreferences.camera_quality) / 100);
  }
  if (userPreferences.payload_capacity > 0) {
    score += Math.min(50, (drone.payload_capacity - userPreferences.payload_capacity) / 100);
  }
  if (userPreferences.wind_resistance > 0) {
    score += Math.min(50, (drone.wind_resistance - userPreferences.wind_resistance) * 5);
  }

  // Score matching autonomous features
  const userAutonomousSet = new Set(userPreferences.autonomous_features);
  const matchingAutonomousFeatures = drone.autonomous_features.filter(feature => 
    userAutonomousSet.has(feature)
  );
  score += (matchingAutonomousFeatures.length / userPreferences.autonomous_features.length) * 100;

  // Score matching connectivity options
  const userConnectivitySet = new Set(userPreferences.connectivity_options);
  const matchingConnectivityOptions = drone.connectivity_options.filter(option => 
    userConnectivitySet.has(option)
  );
  score += (matchingConnectivityOptions.length / userPreferences.connectivity_options.length) * 100;

  // Experience level - closer to user preference gets more points
  const expDiff = Math.abs(drone.experience_level - Number(userPreferences.experience_level));
  score += Math.max(0, 50 * (1 - expDiff / 5));

  return score;
}

export async function getMatchingDrones(userPreferences) {
  const { data, error } = await supabase
    .from("Drones")
    .select("*")
    // Exact matches for string/enum fields
    .eq("industry", userPreferences.industry)
    .eq("purpose", userPreferences.purpose)
    .eq("portability", userPreferences.portability)
    .eq("obstacle_avoidance", userPreferences.obstacle_avoidance)
    .eq("live_streaming", userPreferences.live_streaming)
    .eq("night_vision", userPreferences.night_vision)
    // Numeric filters (>= user's preference)
    .gte("camera_quality", userPreferences.camera_quality)
    .gte("experience_level", Number(userPreferences.experience_level))
    .lte("price", userPreferences.budget_range_max)
    .gte("flight_time", userPreferences.flight_time)
    .gte("flight_range", userPreferences.flight_range)
    .gte("payload_capacity", Number(userPreferences.payload_capacity))
    .gte("wind_resistance", Number(userPreferences.wind_resistance));

  if (error) {
    console.error("Error fetching drones:", error);
    return [];
  }

  // Rank the matching drones
  const rankedDrones = data.map(drone => ({
    ...drone,
    score: calculateDroneScore(drone, userPreferences)
  }));

  console.log(rankedDrones)

  // Sort by score in descending order
  // return rankedDrones.sort((a, b) => b.score - a.score);
  return data
}

// export async function getMatchingDrones(userPreferences) {
//   const { data, error } = await supabase
//     .from("drones")
//     .select("*")
//     .or(
//       `
//       industry.ilike.%${userPreferences.industry}%,
//       purpose.ilike.%${userPreferences.purpose}%,
//       budget_range.ilike.%${userPreferences.budget_range}%,
//       experience_level.ilike.%${userPreferences.experience_level}%,
//       camera_quality.ilike.%${userPreferences.camera_quality}%,
//       obstacle_avoidance.eq.${userPreferences.obstacle_avoidance},
//       portability.ilike.%${userPreferences.portability}%,
//       live_streaming.eq.${userPreferences.live_streaming},
//       night_vision.eq.${userPreferences.night_vision}
//       `
//     )
//     .filter("flight_time", "gte", userPreferences.flight_time)
//     .filter("flight_range", "gte", userPreferences.flight_range)
//     .filter("payload_capacity", "gte", userPreferences.payload_capacity);

//   if (error) {
//     console.error("Error fetching drones:", error);
//     return [];
//   }

//   return data;
// }
