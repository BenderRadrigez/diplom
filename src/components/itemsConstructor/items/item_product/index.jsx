import React, { useState } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export default function ItemProducts({ item }) {
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [isAddedProduct, setIsAddedProduct] = useState(false);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleAddToBasket = () => {
    setIsAddedProduct(true);
  };

  return (
    <div
      className={style.slide}
      onMouseEnter={() => handleMouseEnter(item.id)}
      onMouseLeave={handleMouseLeave}
    >
      <div className={style.imgBlock}>
        {item.discont_price && (
          <div className={style.discont_persent}>
            -
            {Math.floor(((item.price - item.discont_price) / item.price) * 100)}
            %
          </div>
        )}
        <img
          src={`http://localhost:3333/${item.image}`}
          alt="img"
          onClick={() => navigate(`/products/${item.id}`)}
        />
        {hoveredProductId === item.id && (
          <button
            className={isAddedProduct ? style.disactive : style.active}
            onClick={() => handleAddToBasket()}
            disabled={isAddedProduct}
          >
            {isAddedProduct ? "Added" : "Add to Basket"}
          </button>
        )}
      </div>

      <p onClick={() => navigate(`/products/${item.id}`)}>{item.title}</p>
      {item.discont_price ? (
        <div className={style.prices}>
          <span className={style.discont_price}>${item.discont_price}</span>
          <span className={style.price}>${item.price}</span>
        </div>
      ) : (
        <div className={style.prices}>
          <span className={style.discont_price}>${item.price}</span>
        </div>
      )}
    </div>
  );
}
