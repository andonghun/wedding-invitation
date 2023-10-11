import "./globals.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

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
      <body
        className={`${inter.className} w-screen h-auto bg-[url('/fabric.png')] bg-repeat bg-second`}
      >
        <div className="max-w-sm mx-auto">{children}</div>{" "}
      </body>
    </html>
  );
}
