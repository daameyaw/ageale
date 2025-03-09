import { useQuery } from "@tanstack/react-query";
import { getMatchingDrones } from "../../services/apiDrones";

export function useMatchDrones(userPreferences) {
  const {
    isLoading,
    data: matchingDrones,
    error,
  } = useQuery({
    queryKey: ["matchingDrones", userPreferences],
    queryFn: () => getMatchingDrones(userPreferences),
    enabled: !!userPreferences, // Only run the query if userPreferences exists
  });

  return { isLoading, matchingDrones, error };
}
