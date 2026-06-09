'use client';
import { createClient } from "@/utils/supabase/server";
import { useState } from 'react';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const supabase = createClient();

    const handleLogin = async () => {
        //sends entered email and password to supabase
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            
        });
        
        if(error){ 
            alert(error.message);
        }else {
            window.location.href = '/admin';
        }
    };
    return (
        <>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </>
    )
}