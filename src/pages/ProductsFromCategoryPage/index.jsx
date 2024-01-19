import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../../requests/getProductsByCategory";
import ItemProducts from "../../components/itemsConstructor/items/item_product";
import NavInPages from "../../components/navInPages";
import style from "./style.module.scss";

export default function ProductsFromCategory() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getFetchCategories = async () => {
      await dispatch(getProductsByCategory(id));
    };
    getFetchCategories();
  }, []);

  const productsByCategory = useSelector(
    (state) => state.productsByCategory?.list
  );

  const productData = productsByCategory?.data;
  return (
    <main>
      <NavInPages />
      <div className={style.conteinerData}>
        {productData ? (
          productData.map((el) => <ItemProducts key={el.id} item={el} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
