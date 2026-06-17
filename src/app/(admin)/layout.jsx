import { Playfair_Display, DM_Sans} from "next/font/google";
import SidePanelAdmin from "@/components/admin/SidePanelAdmin";
import LogoutButton from "@/components/LogoutButton";
import "@/app/globals.css";
import { createClient } from "@/utils/supabase/server";

const playfairDisplay = Playfair_Display({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
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
      className={`${playfairDisplay.variable} ${dmSans.variable} h-full antialiased`}
      >
      <body className="min-h-screen bg-[#140c08] text-white overflow-hidden">
        <header className="h-20 border-b border-[#3a2818] flex items-center justify-between px-10">
          <div>
            <h1 className="text-3xl font-serif text-[#c9a54c]">
              Maynila
            </h1>

            <p className="text-sm italic text-white/70">
              Admin Panel
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/70">
              Welcome, {admin?.username}
            </span>

            <LogoutButton />
          </div>
        </header>

        <div className="flex h-[calc(100vh-80px)]">
          <SidePanelAdmin name={admin?.username} />

          <main className="flex-1 overflow-y-auto p-10">
            {children}
          </main>
        </div>
      </body>
      </html>
  );
}