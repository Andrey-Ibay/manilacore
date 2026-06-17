import "@/app/globals.css";
import { Playfair_Display, DM_Sans} from "next/font/google";

import NavbarAndSearchAndLoginAndRegisterAndFullDetails from "@/components/Navbar&Search&Login&Register";
import FullDetail from "@/components/components_function/fullDetail";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Manila Core",
  description: "Website Title",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="icon" type="image/png" href="/assets/manilacore-logo.png" />
      </head>
      <body className="min-h-full flex flex-col font-['DM_Sans',sans-serif] bg-(--cream) text-(--ink) overflow-x-hidden">
        <NavbarAndSearchAndLoginAndRegisterAndFullDetails />   
        {children}
      </body>
    </html>
  );
}
