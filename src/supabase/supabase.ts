import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string ="https://xnqxyhmidhczxxrvkmvi.supabase.co";
const supabaseAnonKey: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucXh5aG1pZGhjenh4cnZrbXZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4OTg1NTYsImV4cCI6MjA0MDQ3NDU1Nn0.oc0N2PZ4xbN6sziMhvo---x9rwRO2Mo1JYf7vFDHX10";

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);
