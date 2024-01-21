import React from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import CartContent from "../../components/cartContent";
import OrderDetails from "../../components/orderDetails";
import { useSelector } from "react-redux";

export default function BasketPage() {
  const navigate = useNavigate();
  const basketList = useSelector((state) => state.basket.basketList);
  return (
    <main>
      <div className={style.headers_h}>
        <h2>Shoping cart</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button onClick={() => navigate("/categories")}>
            Back to the store
          </button>
        </div>
      </div>
      {basketList ? (
        <div className={style.content}>
          <CartContent  listContent={basketList}/>
          <OrderDetails />
        </div>
      ) : (
        <div>
          <p>Looks like you have no items in your basket currently.</p>
          <button >Continue Shopping</button>
        </div>
      )}
    </main>
  );
}
