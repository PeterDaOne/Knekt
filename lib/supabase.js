import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://xmizxxlgmjjbbdafcszd.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhtaXp4eGxnbWpqYmJkYWZjc3pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4ODc3NTIsImV4cCI6MjA4MDQ2Mzc1Mn0.Mxsbh3Nbivn0Anxdc4WFNGdxYO9dPO3Z17RZ0NYDtXs'

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
