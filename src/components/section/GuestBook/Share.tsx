"use client";

import React from "react";
import Image from "next/image";

// Kakao 타입 선언
declare global {
  interface Window {
    Kakao: any;
  }
}

const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "조재연 ♡ 남선혜",
        description: "우리의 첫 시작을 축복해주세요.",
        // imageUrl: "",
        link: {
          mobileWebUrl: "http://localhost:3000",
          webUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "조재연 ♡ 남선혜",
          link: {
            mobileWebUrl: "http://localhost:3000",
            webUrl: "http://localhost:3000p",
          },
        },
      ],
    });
  }
};

const Share = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-14">
        <Image src={`/kakao.png`} width={23} height={23} alt="logo" />
        <button
          className="font-main text-black text-m ml-3"
          onClick={shareKakao}
        >
          카카오톡으로 초대장 보내기
        </button>
      </div>
    </>
  );
};

export default Share;
