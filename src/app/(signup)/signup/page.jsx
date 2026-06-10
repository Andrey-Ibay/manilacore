'use client';
import { createClient } from "@/utils/supabase/client";
import { useState } from 'react';

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const supabase = createClient();
    /*
    ============================================================================

    As of now: IT SUCCESSFULLY creates a user, but it doesn't confirm nor redirect
    
    BALIKAN TOH IF MAY TIME PA, for now stick to Google OAuth for signup and login
    If babalikan, setup SMTP through a free account with Resend or Postmark para 
    maging functional yung confirmation ng signup through email.

    ============================================================================
    */
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
            alert('It worked.');
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