import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
//import ClientSideProviderT from "@/components/clientSideProviderT";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nextjs14 FullStack App",
  description: "Created by Trae Zeeofor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderT> */}
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
        {/* </ClientSideProviderT> */}
      </body>
    </html>
  );
}
