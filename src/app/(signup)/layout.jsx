import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full min-w-ff flex flex-col">
          <h1>This is a navbar for admin</h1>
          <div className="flex flex-row">
            {children}
          </div>
      </body>
      </html>
  );
}