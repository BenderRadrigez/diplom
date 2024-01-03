import React from "react";

export default function ItemProducts({ item, styles }) {
  return (
    <div>
      <div className={styles.discont_persentStyle}>
        -{Math.floor(((item.price - item.discont_price) / item.price) * 100)}%
      </div>
      <img src={`http://localhost:3333/${item.image}`} alt="img" />
      <p>{item.title}</p>
      <div className={styles.pricesStyle}>
        <span className={styles.discont_priceStyle}>${item.discont_price}</span>
        <span className={styles.priceStyle}>${item.price}</span>
      </div>
    </div>
  );
}
