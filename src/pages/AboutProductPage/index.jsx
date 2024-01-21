import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./style.module.scss";
import AddToBasketBtn from "../../components/addToBasketBtn";
import ImageSwiper from "../../components/imageSwiper";

export default function AboutProductPage() {
  const location = useLocation().pathname;
  const [aboutProductData, setAboutProductData] = useState({});
  const [howManyProducts, setHowManyProducts] = useState(1);

  const addMoreProducts = () => {
    setHowManyProducts(howManyProducts + 1);
  };
  const reduceProducts = () => {
    setHowManyProducts(howManyProducts - 1);
  };

  const isDisable = () => {
    return howManyProducts < 2;
  };

  useEffect(() => {
    fetch(`http://localhost:3333${location}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setAboutProductData(data[0]);
      });
  }, [location]);

  return (
    <main className={style.aboutProductComteiner}>
      <section className={style.imgSection}>
        <ImageSwiper
          arrayImagesFromServer={[
            `http://localhost:3333${aboutProductData.image}`,
            `http://localhost:3333${aboutProductData.image}`,
            `http://localhost:3333${aboutProductData.image}`,
            `http://localhost:3333${aboutProductData.image}`,
          ]}
        />
      </section>

      <section className={style.aboutProduct}>
        <h2>{aboutProductData.title}</h2>
        <div className={style.priceContent}>
          {aboutProductData.discont_price && (
            <span className={style.discontPrice}>
              ${aboutProductData.discont_price}
            </span>
          )}
          <span
            className={
              aboutProductData.discont_price ? style.price : style.discontPrice
            }
          >
            ${aboutProductData.price}
          </span>
          {aboutProductData.discont_price && (
            <div className={style.discontPersent}>
              -
              {Math.floor(
                ((aboutProductData.price - aboutProductData.discont_price) /
                  aboutProductData.price) *
                  100
              )}
              %
            </div>
          )}
        </div>
        <div className={style.productsControl}>
          <div className={style.counterOfProduct}>
            <button
              disabled={isDisable()}
              style={isDisable() ? { background: "lightgrey" } : null}
              onClick={() => reduceProducts()}
            >
              -
            </button>
            <span className={style.counter}>{howManyProducts}</span>
            <button onClick={() => addMoreProducts()}>+</button>
          </div>
          <AddToBasketBtn item={aboutProductData} count={howManyProducts} />
        </div>
        <div className={style.description}>
          <h2>Description</h2>
          <p>{aboutProductData.description}</p>
        </div>
      </section>
    </main>
  );
}
