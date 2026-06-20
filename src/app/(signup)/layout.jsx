import { Playfair_Display, DM_Sans } from "next/font/google";
import "@/app/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Login",
  description: "Login with user",
};


export default async function Login({children}){
  
  return(
      
      <html
      lang="en"
      className={` h-full antialiased`}
      >
      <body className="min-h-full min-w-ff flex flex-col">
          <div className="flex flex-row">
            {children}
          </div>
      </body>
      </html>
  );
}