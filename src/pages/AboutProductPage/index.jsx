import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./style.module.scss";
import AddToBasketBtn from "../../components/addToBasketBtn";
import ImageSwiper from "../../components/imageSwiper";

export default function AboutProductPage() {
  const location = useLocation().pathname;
  const [aboutProductData, setAboutProductData] = useState({});

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
          ]}
        />
      </section>

      <section className={style.aboutProduct}>
        <h2>{aboutProductData.title}</h2>
        <p>{aboutProductData.discont_price}</p>
        <p>{aboutProductData.price}</p>
        <AddToBasketBtn />
        <p>{aboutProductData.description}</p>
      </section>
    </main>
  );
}
