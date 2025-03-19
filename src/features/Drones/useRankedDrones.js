import { useQuery } from "@tanstack/react-query";
import { getRankedMatchingDrones } from "../../services/apiDrones"; // Import the new combined function

export function useRankedDrones(userPreferences) {
  const {
    isLoading,
    data: rankedDrones,
    error,
  } = useQuery({
    queryKey: ["rankedDrones", userPreferences], // Update the query key for ranked drones
    queryFn: () => getRankedMatchingDrones(userPreferences), // Use the new function for fetching and ranking drones
    enabled: !!userPreferences, // Only run the query if userPreferences exists
  });

  return { isLoading, rankedDrones, error }; // Return the ranked drones and loading/error state
}
