import { Providers } from "@/components/Providers";
import { Geist, Geist_Mono } from "next/font/google";
import BottomTabs from "./BottomTabs";
import "./globals.css";
import tw from "tailwind-styled-components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Container = tw.div`flex flex-col h-screen`;
const MainWrap = tw.main`flex-1 overflow-auto`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Container>
            <MainWrap>{children}</MainWrap>
            <BottomTabs />
          </Container>
        </Providers>
      </body>
    </html>
  );
}
