import "./globals.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "모바일 청첩장",
  description: "우리의 첫 시작을 축복해주세요.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-screen h-auto`}>
        <Image
          src={`/fabric.png`}
          width={500}
          height={500}
          alt="fabric"
          className="absolute top-0 left-0 z-[-1] w-screen h-screen bg-[#f5f5f5] bg-repeat pointer-events-none"
        />
        <div className="max-w-sm mx-auto">{children}</div>
      </body>
    </html>
  );
}
