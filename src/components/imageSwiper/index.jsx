import React, { useState } from "react";
import style from "./style.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ImageSwiper({ arrayImagesFromServer }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={style.swiperConteiner}>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={"mySwiper " + style.mySwiper}
      >
        {arrayImagesFromServer.map((linkImg, ind) => (
          <SwiperSlide key={ind} className={style.slide}>
            <img key={ind} src={linkImg} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={"mySwiper2 " + style.mySwiper2}
      >
        {arrayImagesFromServer.map((linkImg, ind) => (
          <SwiperSlide key={ind} className={style.swiperSlide}>
            <img key={ind} src={linkImg} alt="img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
