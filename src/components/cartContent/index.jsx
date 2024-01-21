import React, { useEffect } from "react";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import { deleteFromBasket } from "../../store/slices/basketSlice";

export default function CartContent({ listContent }) {
  const dispatch = useDispatch();

  return (
    <section className={style.contentSection}>
      {listContent.map((item) => (
        <div key={item.id} className={style.cardForCart}>
          <img src={`http://localhost:3333${item.image}`} alt="img" />
          <div className={style.info}>
            <h4>{item.title}</h4>
            <div className={style.priceContent}>
              {item.discont_price && (
                <span className={style.discontPrice}>
                  ${item.discont_price * item.count}
                </span>
              )}
              <span
                className={
                  item.discont_price ? style.price : style.discontPrice
                }
              >
                ${item.price * item.count}
              </span>
            </div>
          </div>
          <button
            className={style.deleteBtn}
            onClick={()=>dispatch(deleteFromBasket(item.id))}
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}
