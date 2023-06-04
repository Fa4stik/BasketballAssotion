import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/navigation";

import { picturesApi } from "../api/picturesApi";
export default function MainScreenSlider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const loadData = () => {
      picturesApi
        .getPictures(1, 100)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setItems(data);
        });
    };
    loadData();
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation]}
        loop={true}
        navigation={true}
        slidesPerView={3}
        slidesPerGroup={3}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          768: {
            width: 768,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={10}
        dir="rtl"
        autoplay
        className=" border-nba-border border-2   h-[250px] mb-[150px]"
      >
        {items.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide image={`http://176.124.192.232${image.img}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
