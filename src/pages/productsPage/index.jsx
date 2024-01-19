import React from "react";
import NavInPages from "../../components/navInPages";
import ItemsConstructor from "../../components/itemsConstructor";

export default function ProductsPage() {
  return (
    <div>
      <NavInPages />
      <ItemsConstructor navItem="products"/>
    </div>
  );
}
