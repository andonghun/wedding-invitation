import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PHOTOS = [
  { fileName: "01.jpeg", width: 500, height: 500 },
  { fileName: "02.jpeg", width: 500, height: 500 },
  { fileName: "03.jpeg", width: 500, height: 500 },
  { fileName: "04.jpeg", width: 500, height: 500 },
  { fileName: "05.jpeg", width: 500, height: 500 },
  { fileName: "06.jpeg", width: 500, height: 500 },
  { fileName: "07.jpeg", width: 500, height: 500 },
  { fileName: "08.jpeg", width: 500, height: 500 },
  { fileName: "09.jpeg", width: 500, height: 500 },
  { fileName: "10.jpeg", width: 500, height: 500 },
  { fileName: "11.jpeg", width: 500, height: 500 },
  { fileName: "12.jpeg", width: 500, height: 500 },
  { fileName: "13.jpeg", width: 500, height: 500 },
  { fileName: "14.jpeg", width: 500, height: 500 },
  { fileName: "15.jpeg", width: 500, height: 500 },
  { fileName: "16.jpeg", width: 500, height: 500 },
  { fileName: "17.jpeg", width: 500, height: 500 },
  { fileName: "18.jpeg", width: 500, height: 500 },
  { fileName: "19.jpeg", width: 500, height: 500 },
  { fileName: "20.jpeg", width: 500, height: 500 },
  { fileName: "21.jpeg", width: 500, height: 500 },
  { fileName: "22.jpeg", width: 500, height: 500 },
  { fileName: "23.jpeg", width: 500, height: 500 },
  { fileName: "24.jpeg", width: 500, height: 500 },
  { fileName: "25.jpeg", width: 500, height: 500 },
  { fileName: "26.jpeg", width: 500, height: 500 },
  { fileName: "27.jpeg", width: 500, height: 500 },
  { fileName: "28.jpeg", width: 500, height: 500 },
  { fileName: "29.jpeg", width: 500, height: 500 },
  { fileName: "30.jpeg", width: 500, height: 500 },
  { fileName: "31.jpeg", width: 500, height: 500 },
  { fileName: "32.jpeg", width: 500, height: 500 },
  { fileName: "33.jpeg", width: 500, height: 500 },
  { fileName: "34.jpeg", width: 500, height: 500 },
];

const SwiperModal = () => {
  const [mainSliderIndex, setMainSliderIndex] = useState(0);

  const handleMainSliderChange = (index: number) => {
    setMainSliderIndex(index);
  };

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        className="w-full h-[300px] flex justify-center items-center mb-4"
        onSlideChange={(swiper) => handleMainSliderChange(swiper.realIndex)}
      >
        {PHOTOS.map(({ fileName, height, width }) => {
          return (
            <SwiperSlide
              key={fileName}
              className="flex justify-center items-center"
            >
              <Image
                src={`/gallery/${fileName}`}
                width={300}
                height={200}
                alt={fileName}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        modules={[Pagination, Navigation]}
        className="w-[300px] h-[50px] flex justify-center items-center border-r-main"
        initialSlide={mainSliderIndex} // 메인 슬라이더의 인덱스와 일치하도록 초기 슬라이드 설정
      >
        {PHOTOS.map(({ fileName, height, width }) => {
          return (
            <SwiperSlide
              key={fileName}
              className="flex justify-center items-center"
            >
              <Image
                src={`/gallery/${fileName}`}
                width={300}
                height={200}
                alt={fileName}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperModal;
