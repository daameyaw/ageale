import { useQuery } from "@tanstack/react-query";
import getDrones from "../../services/apiDrones";

export function useDrones() {
  const {
    isLoading,
    data: drones,
    error,
  } = useQuery({
    queryKey: ["drones"],
    queryFn: getDrones,
  });

  return { isLoading, drones, error };
}
