import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";
export default function MainScreenSlider() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const loadData = () => {
      const params = {
        
    };
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
          console.log(data);
          setItems(data);
        });
    };
    loadData();
  }, []);

  return (
    <div className="container swiper-container-new">
      <Swiper
        loop={true}
        navigation={true}
        slidesPerView={3}
        spaceBetween={70}
       
        dir="rtl"
        autoplay
        className="w-full mt-[46px] mb-[90px] border-nba-border border-2 py-[20px] px-[90px] "
      >
        {items.map((image, index) => (
          <SwiperSlide key={index}>
            <Slide image={`http://176.124.192.232${image.img}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
