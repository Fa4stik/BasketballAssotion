import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function MainScreenSlider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const loadData = () => {
      const images = [
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
        { url: "images/photo_sample.jpg" },
      ];
      setItems(images);
    };
    loadData();
  }, []);

  return (
    <div className="container swiper-container-new">
      <Swiper
        loop={true}
        navigation={true}
        // navigation={{
        //   // nextEl: ".swiper-navigation-next",
        //   // prevEl: ".swiper-navigation-prev",
          
        // }}
        slidesPerView={3}
        spaceBetween={90}
        modules={[Navigation]}
        dir="rtl"
        className="w-full mt-[46px] mb-[90px] border-nba-border border-2 py-[20px] px-[90px] "
      >
        {items.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
