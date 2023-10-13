import React from "react";
import Image from "next/image";
import Script from "next/script";

// Kakao 타입 선언
declare global {
  interface Window {
    Kakao: any;
  }
}

// 카카오톡 링크 공유
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const shareKakao = () => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY);
    }

    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "title",
        description: "description",
        imageUrl: "imageUrl",
        link: {
          mobileWebUrl: "http://localhost:3000",
          webUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "title",
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
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <div className="flex items-center justify-center mb-14">
        <Image src={`/kakao.png`} width={23} height={23} alt="logo" />
        <button className="font-main text-black text-m ml-3">
          카카오톡으로 초대장 보내기
        </button>
      </div>
    </>
  );
};

export default Share;
