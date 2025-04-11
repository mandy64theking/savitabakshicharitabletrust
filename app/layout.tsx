import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomNavBar from "@/components/customNavBar";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./footer";

const monsterratSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Late Savita Bakshi Charitable Trust",
  description:
    "Empowering future generations through Chess | Education | Sustainability",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={monsterratSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CustomNavBar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
