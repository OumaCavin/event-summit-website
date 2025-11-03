import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://imwlpdmlnxgziwikhbia.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imltd2xwZG1sbnhneml3aWtoYmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxMDM5NzcsImV4cCI6MjA3NzY3OTk3N30.CI6SVFfQdMp1_rhUOH5fz9LpILFo5XpD78g0ox-wcfc"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
