<<<<<<< HEAD
import { Geist, Geist_Mono } from "next/font/google";
=======
import { Playfair_Display, DM_Sans} from "next/font/google";
>>>>>>> 1507fe8ad5741eb007334c3b457c396e8b89e42c
import SidePanelAdmin from "@/components/admin/SidePanelAdmin";
import LogoutButton from "@/components/LogoutButton";
import "@/app/globals.css";
import { createClient } from "@/utils/supabase/server";

<<<<<<< HEAD
const geistSans = Geist({
=======
const playfairDisplay = Playfair_Display({
>>>>>>> 1507fe8ad5741eb007334c3b457c396e8b89e42c
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

<<<<<<< HEAD
const geistMono = Geist_Mono({
=======
const dmSans = DM_Sans({
>>>>>>> 1507fe8ad5741eb007334c3b457c396e8b89e42c
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Admin Dashboard",
  description: "Dashboard for Local Culture and Heritage Preservation Management",
};

<<<<<<< HEAD

=======
>>>>>>> 1507fe8ad5741eb007334c3b457c396e8b89e42c
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
<<<<<<< HEAD
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">
          <h1>This is a navbar for admin</h1>
          <LogoutButton />
          <div className="flex flex-row">
            <SidePanelAdmin name={admin?.username}/>
            {children}
          </div>
=======
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
>>>>>>> 1507fe8ad5741eb007334c3b457c396e8b89e42c
      </body>
      </html>
  );
}