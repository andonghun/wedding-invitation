import React from "react";

const MovieSection = () => {
  return (
    <section>
      <div className="title">
        <p className="font-main text-main text-xl tracking-wide mb-10">
          당신과 함께하고 싶은 소중한 약속의 시간
        </p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/88B4q-T4HzQ?version=3&autoplay=1&controls=0&&showinfo=0&loop=1"
        width={344}
        height={194}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </section>
  );
};

export default MovieSection;
