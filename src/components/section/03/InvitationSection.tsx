import React from "react";

const InvitationSection = () => {
  return (
    <section>
      <h2 className="title">INVITATION</h2>
      <div className="invitation-content">
        <p>내가 그의 이름을 불러주기 전에는</p>
        <p>그는 다만</p>
        <p>하나의 몸짓에 지나지 않았다.</p>

        <p>내가 그의 이름을 불러주었을 때,</p>
        <p>그는 나에게로 와서</p>
        <p>꽃이 되었다.</p>
        <p>우리들은 모두</p>
        <p>무엇이 되고 싶다.</p>
        <p>너는 나에게 나는 너에게</p>
        <p>잊혀지지 않는 하나의 눈짓이 되고 싶다.</p>
        <p>{`김춘수 <꽃> 중`}</p>
      </div>
      <div className="parent-content">
        <p>조남영 박지연 의 차남 재연</p>
        <p>남상열 이옥배 의 차녀 선혜</p>
      </div>
      <div className="location-content">
        <p>2024년 1월 14일 일요일 오후 3시</p>
        <p>플로팅아일랜드 2층 컨벤션홀</p>
      </div>
    </section>
  );
};

export default InvitationSection;
