import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import { useNavigate } from "react-router-dom";
import ItemCategories from "../items/item_categories";
import ItemProducts from "../items/item_product";

// menu_item - для создания свайперов для разделов "категории" и "скидки" на домашней странице

export default function DataItems({
  URL,
  styles,
  navItem = "categories",
  isSales = false,
  isSlider = false,
}) {
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

  function makeBeautyPath(str){
    return str.toLowerCase().split(" ").join("-");
  }

  return isSlider ? (
    <Swiper
      className={styles.swiperStyle}
      modules={[Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {items.map((item) => (
        // при клике на айтем отправлять на страницу. пока отправляет вникуда
        <SwiperSlide
          className={styles.slideStyle}
          key={item.id}
          onClick={() => navigate(`/${navItem}/${makeBeautyPath(item.title)}`)}
        >
          {isSales ? (
            <ItemProducts item={item} styles={styles} />
          ) : (
            <ItemCategories
              img={`http://localhost:3333/${item.image}`}
              title={item.title}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        gap: "2vh",
        flexWrap: "wrap",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() =>
            navigate(
              `/${navItem}/${makeBeautyPath(item.title)}`
            )
          }
        >
          {isSales ? (
            <ItemProducts item={item} styles={styles} />
          ) : (
            <ItemCategories
              img={`http://localhost:3333/${item.image}`}
              title={item.title}
            />
          )}
        </div>
      ))}
    </div>
  );
}
