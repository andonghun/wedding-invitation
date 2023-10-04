import React from "react";

const MainSection = () => {
  return (
    <section>
      <div className="flex items-center justify-center mb-3">
        <div className="font-main text-main text-txl m-5">조 재 연</div>
        <div className="m-5">
          <div className="font-main text-main text-txl border-solid border-b">
            01
          </div>
          <div className="font-main text-main text-txl">14</div>
        </div>
        <div className="font-main text-main text-txl m-5">남 선 혜</div>
      </div>
      <div className="content">
        <div className="bg-white pt-4 shadow-lg">
          <div className="bg-main w-[320px] h-[350px] mx-auto flex items-center justify-center"></div>
          <div className="font-main text-gray text-la pt-6 pb-1">
            2024년 1월 14일 일요일 오후 3시
          </div>
          <div className="font-main text-gray text-la pt-1 pb-6">
            플로팅아일랜드 2F 컨벤션홀
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
