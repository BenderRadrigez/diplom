import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../../requests/getProductsByCategory";
import { useParams } from "react-router-dom";
import ProductContainer from "../../components/productContainer";
import NavInPages from "../../components/navInPages";

export default function Products() {
  const {title} = useParams();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProductsByCategory(title))
  }, []);

  
  return (
    <div>
      <NavInPages/>
      <ProductContainer showDiscountedOnly={false}/>
    </div>
  );
}
