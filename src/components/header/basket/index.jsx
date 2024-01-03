import React, { useState } from "react";
import style from "./style.module.scss";
import basket from "../../../assets/images/icons/basket=empty.svg";

export default function Basket() {
  const [count, setCount] = useState(0);

  function changeOfCountforBusket() {
    // временно пока на клик по корзине позже нужно нормальную логику
    setCount(count + 1);
  }

  return (
    <div onClick={changeOfCountforBusket} className={style.basket}>
      <div className={style.counter}>
        <span>{count}</span>
      </div>
      <img src={basket} alt="basket" />
    </div>
  );
}
