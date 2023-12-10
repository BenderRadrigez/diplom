import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

export default function DataItems() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData(link) {
      const response = await fetch(link);
      return await response.json();
    }
    fetchData("http://localhost:3333/categories/all").then((data) => {
      setItems(data);
    });
  }, []);
  return (
    <Swiper
      className={style.slides_for_categorries}
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {items.map((item, index) => (
        <SwiperSlide className={style.slide} key={index}>
          <img src={`http://localhost:3333/${item.image}`} alt="img" />
          <p>{item.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
