
import { Playfair_Display, DM_Sans} from "next/font/google";
import SidePanelAdmin from "@/components/admin/SidePanelAdmin";
import LogoutButton from "@/components/LogoutButton";
import "@/app/globals.css";
import { createClient } from "@/utils/supabase/server";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
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
      className={`h-full antialiased ${dmSans.className} scroll-smooth`}
      >
      <body className="font-['DM_Sans',sans-serif] bg-(--cream) text-(--ink) min-h-screen m-0 p-0 box-border">
        <div className="flex min-h-screen">
          <SidePanelAdmin name={admin?.username} />

          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
      </html>
  );
}