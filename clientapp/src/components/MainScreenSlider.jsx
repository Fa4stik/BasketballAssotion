import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/navigation";

import axios from "axios";
export default function MainScreenSlider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const loadData = () => {

      axios
        .get("http://176.124.192.232/api/Picture/GetPictures?", {
          params: {
            start: 1,
            end: 100,
          },
        })
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
        slidesPerView={4}
        breakpoints={{
          576: {
            width: 576,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 1,
          },
          1200: {

            slidesPerView: 4,
          },
        }}
        spaceBetween={10}
        dir="rtl"
        autoplay
        className="mb-[90px] border-nba-border border-2   h-[250px]"
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
