import React from "react";
import style from "./style.module.scss";
import { useDispatch } from "react-redux";
import {
  deleteFromBasket,
  countPlus,
  countMinus,
} from "../../store/slices/basketSlice";
import { useNavigate } from "react-router-dom";

export default function CartContent({ listContent }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section
      className={style.contentSection}
    >
      {listContent.map((item) => (
        <div key={item.id} className={style.cardForCart}>
          <img src={`http://localhost:3333${item.image}`} alt="img" />
          <div className={style.info}>
            <h4
              className={style.title}
              onClick={() => navigate(`/products/${item.id}`)}
            >
              {item.title}
            </h4>
            <div className={style.priceContent}>
              <div className={style.counterOfProduct}>
                <button
                  className={style.btnControl}
                  onClick={() => dispatch(countMinus(item.id))}
                >
                  -
                </button>
                <span className={style.counter}>{item.count}</span>
                <button
                  className={style.btnControl}
                  onClick={() => dispatch(countPlus(item.id))}
                >
                  +
                </button>
              </div>
              {item.discont_price && (
                <span className={style.discontPrice}>
                  ${+(item.discont_price * item.count).toFixed(2)}
                </span>
              )}
              <span
                className={
                  item.discont_price ? style.price : style.discontPrice
                }
              >
                ${+(item.price * item.count).toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className={style.deleteBtn}
            onClick={() => dispatch(deleteFromBasket(item.id))}
          >
            X
          </button>
        </div>
      ))}
    </section>
  );
}
