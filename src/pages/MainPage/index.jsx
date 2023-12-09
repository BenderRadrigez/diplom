import React from "react";
import Banner from "../../components/main/main_page/banner";
import CategoriesMain from "../../components/main/main_page/categoriesMain";
import GetDiscount from "../../components/main/main_page/get_a_discount";
import Sales from "../../components/main/main_page/sale";

export default function Main() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Banner />
      <CategoriesMain/>
      <GetDiscount/>
      <Sales/>
    </div>
  );
}
