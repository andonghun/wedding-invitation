import React from "react";

const InvitationSection = () => {
  return (
    <section>
      <div className="font-main text-main text-m mb-4 tracking-widest">
        INVITATION
      </div>
      <div className="font-main text-main text-xl tracking-widest mb-14">
        소중한 분들을 초대합니다
      </div>
      <div className="invitation-content">
        <p className="font-main text-gray text-m tracking-wide mb-1">
          내가 그의 이름을 불러주기 전에는
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          그는 다만
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          하나의 몸짓에 지나지 않았다.
        </p>

        <p className="font-main text-gray text-m tracking-wide mb-1">
          내가 그의 이름을 불러주었을 때,
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          그는 나에게로 와서
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          꽃이 되었다.
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          우리들은 모두
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          무엇이 되고 싶다.
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-1">
          너는 나에게 나는 너에게
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-8">
          잊혀지지 않는 하나의 눈짓이 되고 싶다.
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-14">{`김춘수, <꽃> 中`}</p>
      </div>
      <div className="parent-content">
        <div className="flex items-center justify-center">
          <p className="font-main text-black text-la tracking-wide">
            조남영 · 박지연
          </p>
          <p className="font-main text-gray text-m tracking-wide ml-1 mr-2">
            의 차남
          </p>
          <p className="font-main text-black text-la tracking-wide">재연</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="font-main text-black text-la tracking-wide">
            남상열 · 이옥배
          </p>
          <p className="font-main text-gray text-m tracking-wide ml-1 mr-2">
            의 차녀
          </p>
          <p className="font-main text-black text-la tracking-wide">선혜</p>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;
