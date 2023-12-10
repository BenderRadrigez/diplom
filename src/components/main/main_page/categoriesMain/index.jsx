import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import style from "./style.module.scss";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function CategoriesMain() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

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
    <div className={style.categoriesMain}>
      <div className={style.headers_h}>
        <h2>Categories</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button onClick={() => navigate("/categories")}>Categories</button>
        </div>
      </div>
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
          // при клике на айтем отправлять на страницу категорий пока отправляет вникуда
          <SwiperSlide className={style.slide} key={index} onClick={() => navigate(item.image)}>
            <img src={`http://localhost:3333/${item.image}`} alt="img" />
            <p>{item.title}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
