'use client';
import { createClient } from "@/utils/supabase/client";
import { useState } from 'react';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const supabase = createClient();

    const handleSignUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        if(error){
            console.error("SUPABASE AUTH ERROR: ", error.message);
            console.table(error);
        }else{
            alert('Check your email for the confirmation link');
        } 
    };
    return (
        <>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignUp}>Sign Up</button>
        </>
    )
}