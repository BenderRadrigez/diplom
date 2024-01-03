import React, { useEffect, useState } from "react";
import PriceFilter from "../priceFilter";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, } from "../../requests/getAllProducts";
import {setPriceFilter, toggleDiscount} from "../../store/slices/filtersSlice";

export default function ProductContainer({ showDiscountedOnly }) {
  const dispatch = useDispatch();
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [addedProductIds, setAddedProductIds] = useState([]);
  const isDiscountedOnly = useSelector(
    (state) => state.filters.showDiscountedOnly
  );
  const allData = useSelector((state) => state.sale.list);
  const productsToShow = showDiscountedOnly
    ? allData.filter((product) => product.discont_price)
    : allData;

  const handleFilterChange = (newFilterParams) => {
    const filtered = productsToShow.filter((product) => {
      const price = (
        product.price -
        (product.discont_price * product.price) / 100
      ).toFixed(2);

      return !newFilterParams.from && !newFilterParams.to
        ? true
        : (!newFilterParams.from || price >= newFilterParams.from) &&
            (!newFilterParams.to || price <= newFilterParams.to);
    });
    setFilteredProducts(filtered);
  };
  useEffect(() => {
    // Загрузка данных при монтировании
    dispatch(getAllProducts());
    // применение стартовых данных
    dispatch(setPriceFilter({ from: "", to: "" }));
  }, [dispatch]);

  const handleMouseEnter = (productId) => {
    setHoveredProductId(productId);
  };
  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  const handleAddToCard = (productId) => {
    setAddedProductIds([...addedProductIds, productId]);
  };
  const handleToggleDiscount = () => {
    // Диспетчер Redux для изменения showDiscountedOnly
    dispatch(toggleDiscount());
  };
  const isProductAdded = (productId) => addedProductIds.includes(productId);
  return (
    <div>
      <PriceFilter onFilterChenge={handleFilterChange} />
    </div>
  );
}
