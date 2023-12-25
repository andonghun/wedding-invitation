import "./globals.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "react-toastify/dist/ReactToastify.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "조재연 ♡ 남선혜",
  description: "우리의 첫 시작을 축복해주세요.",
  openGraph: {
    description: "우리의 첫 시작을 축복해주세요.",
    images: [
      {
        url: "https://slot.jysh-wedding.xyz/thumbnail.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src={"https://developers.kakao.com/sdk/js/kakao.min.js"} />
      <body
        className={`${inter.className} w-screen h-auto bg-[url('/fabric.png')] bg-repeat bg-second`}
      >
        <ToastContainer
          position="top-center"
          autoClose={2000}
          newestOnTop={true}
          hideProgressBar={true}
          limit={1}
        />
        <div className="max-w-sm mx-auto">{children}</div>{" "}
      </body>
    </html>
  );
}
