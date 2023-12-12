import Image from "next/image";
import React, { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PHOTOS = [
  { fileName: "wedding_1.webp", width: 500, height: 500 },
  { fileName: "wedding_2.webp", width: 500, height: 500 },
  { fileName: "wedding_3.webp", width: 500, height: 500 },
  { fileName: "wedding_4.webp", width: 500, height: 500 },
  { fileName: "wedding_5.webp", width: 500, height: 500 },
  { fileName: "wedding_6.webp", width: 500, height: 500 },
  { fileName: "wedding_7.webp", width: 500, height: 500 },
  { fileName: "wedding_8.webp", width: 500, height: 500 },
  { fileName: "wedding_9.webp", width: 500, height: 500 },
  { fileName: "wedding_10.webp", width: 500, height: 500 },
  { fileName: "wedding_11.webp", width: 500, height: 500 },
  { fileName: "2.webp", width: 500, height: 500 },
  { fileName: "3.webp", width: 500, height: 500 },
  { fileName: "4.webp", width: 500, height: 500 },
  { fileName: "5.webp", width: 500, height: 500 },
  { fileName: "6.webp", width: 500, height: 500 },
  { fileName: "7.webp", width: 500, height: 500 },
  { fileName: "8.webp", width: 500, height: 500 },
  { fileName: "9.webp", width: 500, height: 500 },
  { fileName: "10.webp", width: 500, height: 500 },
  { fileName: "11.webp", width: 500, height: 500 },
  { fileName: "12.webp", width: 500, height: 500 },
  { fileName: "13.webp", width: 500, height: 500 },
  { fileName: "14.webp", width: 500, height: 500 },
  { fileName: "15.webp", width: 500, height: 500 },
  { fileName: "16.webp", width: 500, height: 500 },
  { fileName: "17.webp", width: 500, height: 500 },
  { fileName: "18.webp", width: 500, height: 500 },
  { fileName: "19.webp", width: 500, height: 500 },
  { fileName: "20.webp", width: 500, height: 500 },
  { fileName: "21.webp", width: 500, height: 500 },
  { fileName: "22.webp", width: 500, height: 500 },
  { fileName: "23.webp", width: 500, height: 500 },
  { fileName: "24.webp", width: 500, height: 500 },
  { fileName: "25.webp", width: 500, height: 500 },
  { fileName: "26.webp", width: 500, height: 500 },
  { fileName: "27.webp", width: 500, height: 500 },
  { fileName: "28.webp", width: 500, height: 500 },
  { fileName: "29.webp", width: 500, height: 500 },
  { fileName: "30.webp", width: 500, height: 500 },
  { fileName: "31.webp", width: 500, height: 500 },
  { fileName: "32.webp", width: 500, height: 500 },
  { fileName: "33.webp", width: 500, height: 500 },
  { fileName: "34.webp", width: 500, height: 500 },
];

const SwiperModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageFileName, setModalImageFileName] = useState<string | null>(
    null
  );

  const [mainSliderIndex, setMainSliderIndex] = useState(0);

  const handleMainSliderChange = (index: number) => {
    setMainSliderIndex(index);
  };

  return (
    <>
      <Swiper
        modules={[Pagination, Navigation]}
        className="w-[300px] h-[300px] flex justify-center items-center mb-4"
        onSlideChange={(swiper) => handleMainSliderChange(swiper.realIndex)}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {PHOTOS.map(({ fileName }) => {
          return (
            <SwiperSlide
              key={fileName}
              className="flex justify-center items-center"
            >
              <Image
                src={`/gallery/${fileName}`}
                width={500}
                height={500}
                alt={fileName}
                onClick={() => {
                  setIsModalOpen(true);
                  setModalImageFileName(fileName);
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {isModalOpen && (
        <div
          className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => {
            setIsModalOpen(false);
            setModalImageFileName(null);
          }}
        >
          <div className="flex justify-center items-center">
            <Image
              src={`/gallery/${modalImageFileName}`}
              width={500}
              height={500}
              alt={"modal"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperModal;
