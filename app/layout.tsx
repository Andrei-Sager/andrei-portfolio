import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrei Sager Portfolio",
  description: "A next.js portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center w-full">
          <div className="flex flex-col w-full max-w-screen-2xl">
            <Navbar />
            <main className="w-full">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
