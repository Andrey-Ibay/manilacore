import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

//takes session and auth cookies from supabase
export async function GET(request){
    const { searchParams, origin } = new URL(request.url);
    const code = searchParams.get('code');

    if (code){
        const supabase = await createClient();
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        
        if (!error){
            const { data: { user }} = await supabase.auth.getUser();
            const { data: person } = await supabase
                .from("users")
                .select("id")
                .eq("id", user?.id)
                .single();
                
            console.log("test: " + person.role);
            
            console.log("test1: " + user);
            if(person.role == "admin"){
                return NextResponse.redirect(`${origin}/admin`);
            }else if(person.role == "user"){
                return NextResponse.redirect(`${origin}/profile`);
            }
        }
        
    }
    console.log("from route")
    return NextResponse.redirect(`${origin}/login`);
}