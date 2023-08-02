import React from "react";

const MovieSection = () => {
  return (
    <section>
      <div className="title">
        <p>당신과 함께하고 싶은</p>
        <p>소중한 약속의 시간</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/ArmDp-zijuc?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"
        width={320}
        height={180}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

export default MovieSection;
