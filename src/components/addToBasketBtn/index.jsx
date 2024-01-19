import { Button, ConfigProvider } from "antd";
import React, { useState } from "react";
import style from "./style.module.scss";

export default function AddToBasketBtn() {
  const [isAddedProduct, setIsAddedProduct] = useState(false);

  const handleAddToBasket = () => {
    setIsAddedProduct(true);
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
