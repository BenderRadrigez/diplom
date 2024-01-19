import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import ItemCategories from "./items/item_categories";
import ItemProducts from "./items/item_product";
import { getAllProducts } from "../../requests/getProducts";
import style from "./style.module.scss";

export default function ItemsConstructor({
  isSlider = false,
  isCategories = false,
  isSales = false,
}) {
  const categoriesData = useSelector((state) => state.categories.list);
  const dispatch = useDispatch();
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    dispatch(getAllProducts()).then((resp) => {
      setProductsData(resp.payload);
    });
  }, [dispatch]);
  const salesData = productsData.filter((el) => {
    return el.discont_price != null;
  });

  const items = isCategories
    ? categoriesData
    : isSales
    ? salesData
    : productsData;

  return isSlider ? (
    <Swiper
      className={style.slides_for_sales}
      modules={[Mousewheel, Navigation, Pagination]}
      spaceBetween={30}
      slidesPerView={4}
      direction={'horizontal'}
      mousewheel={true}
      pagination={{ clickable: true, dynamicBullets: true }}
      scrollbar={{ draggable: true }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          {isCategories ? (
            <ItemCategories item={item} />
          ) : (
            <ItemProducts item={item} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <div className={style.slides_for_sales}>
      {items.map((item) => (
        <div key={item.id}>
          {isCategories ? (
            <ItemCategories item={item} />
          ) : (
            <ItemProducts item={item} />
          )}
        </div>
      ))}
    </div>
  );
}
