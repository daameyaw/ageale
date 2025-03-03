import supabase from "../config/supabase";

async function getDrones() {
  const { data, error } = await supabase.from("Drones").select("*");
  if (error) throw error;
  return data;
}

export default getDrones;
