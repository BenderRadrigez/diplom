import React, { useState } from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import AddToBasketBtn from "../../../addToBasketBtn";
import { Link } from "react-scroll";

export default function ItemProducts({ item }) {
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
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
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={200}
        >
          <img
          src={`http://localhost:3333/${item.image}`}
          alt="img"
          onClick={() => navigate(`/products/${item.id}`)}
        />
        </Link>
        
        {hoveredProductId === item.id && (
          <AddToBasketBtn/>
        )}
      </div>
      <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <p onClick={() => navigate(`/products/${item.id}`)}>{item.title}</p>
        </Link>
      
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
