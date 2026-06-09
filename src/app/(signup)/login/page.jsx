'use client';
import { createClient } from "@/utils/supabase/client";
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const supabase = createClient();

    const handleLogin = async () => {
        //sends entered email and password to supabase
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
            
        });

        if(error){ 
            console.log("error: " + error)
        }else {
            console.log("Routing to admin.")
            window.location.href = '/admin';
        }
        console.log("End of handleLogin()")
    };
    const handleGoogleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
            // This tells Google where to send the user back to in your app
            redirectTo: `${window.location.origin}/auth/callback`,
            },
        });

        if (error) {
            console.error("Google Login Error:", error.message);
        }
    };
    return (
        <>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleGoogleLogin}>Login with Google</button>

        </>
    )
}