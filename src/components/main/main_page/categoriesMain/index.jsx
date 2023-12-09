import React from "react";
import style from "./style.module.scss";

export default function CategoriesMain() {
  return (
    <div className={style.categoriesMain}>
      <div className={style.headers_h}>
        <h2>Categories</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button>All categories</button>
        </div>
      </div>
      <div className={style.slides_for_categorries}>
        {/* сюда пойдет слайдер */}
      </div>
    </div>
  );
}
