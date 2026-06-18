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
        <button className="bg-white-400 rounded-l p-4" onClick={handleLogout}>Log out</button>
    );
}