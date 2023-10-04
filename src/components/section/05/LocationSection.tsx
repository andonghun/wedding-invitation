import React from "react";

const LocationSection = () => {
  return (
    <section>
      <div>
        <div className="font-main text-main text-m mb-4 tracking-widest">
          LOCATION
        </div>
        <div className="font-main text-main text-xl tracking-widest mb-14">
          오시는 길
        </div>
      </div>
      <div className="location-content">
        <p className="font-main text-black text-la tracking-wide mb-4">
          플로팅아일랜드 2F 컨벤션홀
        </p>
        <p className="font-main text-gray text-m tracking-wide mb-14">
          서울시 서초구 반포동 650
        </p>
      </div>
      <div>
        <div>지도</div>
      </div>
    </section>
  );
};

export default LocationSection;
