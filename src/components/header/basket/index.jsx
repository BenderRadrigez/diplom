import React, { useEffect } from "react";
import style from "./style.module.scss";
import basket from "../../../assets/images/icons/basket=empty.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../store/slices/basketSlice";

export default function Basket() {
  const counter = useSelector((state) => state.basket.basketCounter);
  const navigate= useNavigate();

  return (
    <div onClick={() => {navigate("/basket")}} className={style.basket}>
      {counter > 0 && (
        <div className={style.counter}>
          <span>{counter}</span>
        </div>
      )}
      <img src={basket} alt="basket" />
    </div>
  );
}
