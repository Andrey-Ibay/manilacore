import { createBrowserClient } from '@supabase/ssr'

//Acts as a direct gateway that allows the frontend to connect to Supabase.
export function createClient(){
    return createBrowserClient(
        //necessary keys to connect to supabase
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
}