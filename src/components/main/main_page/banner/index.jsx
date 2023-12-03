import React from "react";
import style from "./style.module.scss";

export default function Banner() {
  return <div className={style.banner}>
    <h3>Amazing Discounts<br/> on Garden Products!</h3>
    <button>Check out</button>
  </div>;
}
