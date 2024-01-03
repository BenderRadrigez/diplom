import React from "react";
import Banner from "../../components/banner";
import CategoriesMain from "../../components/categoriesMain";
import GetDiscount from "../../components/get_a_discount";
import Sales from "../../components/sale";

export default function Main() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Banner />
      <CategoriesMain />
      <GetDiscount />
      <Sales />
    </main>
  );
}
