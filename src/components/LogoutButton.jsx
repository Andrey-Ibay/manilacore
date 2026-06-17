'use client'

import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function LogoutButton(){
    const supabase = createClient();
    const router = useRouter();
    
    //Logs out
    const handleLogout = async () =>{
        await supabase.auth.signOut();

        //redirects back to login
        router.push("/login");
        router.refresh();
    }
    
    return(
        <button onClick={handleLogout}>Log out</button>
    );
}