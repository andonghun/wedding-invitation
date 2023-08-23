import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

// Use a custom domain as the supabase URL
export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
