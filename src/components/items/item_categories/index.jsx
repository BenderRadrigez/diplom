import React from "react";
import style from "./style.module.scss";

export default function ItemCategories({ img, title }) {
  return (
    <div className={style.slide}>
      <img src={img} alt="img" />
      <p>{title}</p>
    </div>
  );
}
