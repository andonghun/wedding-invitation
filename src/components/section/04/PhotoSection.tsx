"use client";
import { SwiperModal } from "@/components/Modal";
import React from "react";

const PhotoSection = () => {
  return (
    <section>
      <div>
        <div className="font-main text-main text-m mb-4 tracking-widest">
          GALLARY
        </div>
        <div className="font-main text-main text-xl tracking-widest mb-14">
          우리가 함께한 순간
        </div>
      </div>
      <SwiperModal />
    </section>
  );
};

export default PhotoSection;
