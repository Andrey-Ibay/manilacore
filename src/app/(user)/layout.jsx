import "@/app/globals.css";
import { Playfair_Display, DM_Sans} from "next/font/google";
import NavbarAndSearch from "@/components/NavbarAndSearch";

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
    <html
      lang="en"
      className="h-full antialiased"
    >

      <body className="h-full items-center flex flex-col font-['DM_Sans',sans-serif] bg-(--cream) text-(--ink) overflow-hidden">
        <NavbarAndSearch />
        {children}
      </body>
    </html>
  );
}
