import { Geist, Geist_Mono } from "next/font/google";
import SidePanelAdmin from "@/components/admin/SidePanelAdmin";
import LogoutButton from "@/components/LogoutButton";
import "@/app/globals.css";
import { createClient } from "@/utils/supabase/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Dashboard for Local Culture and Heritage Preservation Management",
};


export default async function Admin({children}){
  const supabase = await createClient();
  const {data : { user }} = await supabase.auth.getUser();
  const {data : admin} = await supabase
      .from("admins")
      .select("username")
      .eq("username", "Jose Rizal")
      .single();
  //console.log(user.id);
  return(
      
      <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">
          <h1>This is a navbar for admin</h1>
          <LogoutButton />
          <div className="flex flex-row">
            <SidePanelAdmin name={admin?.username}/>
            {children}
          </div>
      </body>
      </html>
  );
}