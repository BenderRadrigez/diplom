import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useNavigate } from "react-router-dom";

export default function DataItems({ URL, styles, isSales = false }) {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData(link) {
      const response = await fetch(link);
      return await response.json();
    }
    fetchData(URL).then((data) => {
      if (isSales) {
        data = data.filter((el) => {
          return el.discont_price != null;
        });
      }
      setItems(data);
    });
  }, []);

  return (
    <Swiper
      className={styles.swiperStyle}
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {items.map((item) =>
        // при клике на айтем отправлять на страницу. пока отправляет вникуда
        isSales ? (
          <SwiperSlide
            className={styles.slideStyle}
            key={item.id}
            onClick={() => navigate(item.image)}
          >
            <div className={styles.discont_persentStyle}>-{Math.floor((item.price - item.discont_price)/item.price * 100)}%</div>
            <img src={`http://localhost:3333/${item.image}`} alt="img" />
            <p>{item.title}</p>
            <div className={styles.pricesStyle}>
              <span className={styles.discont_priceStyle}>
                ${item.discont_price}
              </span>
              <span className={styles.priceStyle}>${item.price}</span>
            </div>
          </SwiperSlide>
        ) : (
          <SwiperSlide
            className={styles.slideStyle}
            key={item.id}
            onClick={() => navigate(item.image)}
          >
            <img src={`http://localhost:3333/${item.image}`} alt="img" />
            <p>{item.title}</p>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
