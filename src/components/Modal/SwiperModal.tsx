import Image from "next/image";
import React from "react";
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
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="w-full h-[500px] flex justify-center items-center"
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
  );
};

export default SwiperModal;
