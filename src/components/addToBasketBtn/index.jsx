import { Button, ConfigProvider } from "antd";
import React, { useState } from "react";
import style from "./style.module.scss";
import { addToBasket, changeCounter } from "../../store/slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";

export default function AddToBasketBtn({ item, count = 1 }) {
  const dispatch = useDispatch();
  const [isAddedProduct, setIsAddedProduct] = useState(false);

  const handleAddToBasket = () => {
    setIsAddedProduct(true);
    dispatch(changeCounter(count));
    dispatch(addToBasket(item));
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "000",
        },
      }}
    >
      <Button
        type="primary"
        className={style.addToBasketBtn}
        onClick={() => handleAddToBasket()}
        disabled={isAddedProduct}
      >
        {isAddedProduct ? "Added" : "Add to Cart"}
      </Button>
    </ConfigProvider>
  );
}
