import React from "react";
import style from "./style.module.scss";
import DataItems from "../../menu_items";

export default function Sales() {
  const styles = {
    swiperStyle: style.slides_for_sales,
    slideStyle: style.slide,
    pricesStyle: style.prices,
    priceStyle: style.price,
    discont_priceStyle: style.discont_price,
    discont_persentStyle : style.discont_persent,
  };
  return (
    <div className={style.sales}>
      <div className={style.headers_h}>
        <h2>Sales</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button>All Sales</button>
        </div>
      </div>
      <DataItems URL={"http://localhost:3333/products/all"} styles={styles} isSales={true} />
    </div>
  );
}
