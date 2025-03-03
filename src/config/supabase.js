import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gcmsonsndbtnntkiohkf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjbXNvbnNuZGJ0bm50a2lvaGtmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwMTM5MDAsImV4cCI6MjA1NjU4OTkwMH0.QSkv5fBFixbkuUlFBAbz9XQmSM6iDszzLAQi11W7WEY"; // Note: Changed to REACT_APP_ prefix
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
