import React from "react";
import style from "./style.module.scss";

export default function Sales() {
  return (
    <div className={style.sales}>
      <div className={style.headers_h}>
        <h2>Sales</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button>All Sales</button>
        </div>
      </div>
      <div className={style.slides_for_sales}>
        {/* сюда пойдет слайдер */}
      </div>
    </div>
  );
}
