// есть проблема (warning) с NaN пока не могу решить но нужно еще подумать


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPriceFilter } from "../../store/slices/filtersSlice";
import s from "./style.module.scss";

export default function PriceFilter({ onFilterChenge }) {
  const dispatch = useDispatch();
  const { fromPrice, toPrice } = useSelector(
    (state) => state.filters.priceFilter
  );

  // можно оптимизировать но пока не знаю как. упирается в передачу параметра, нужно подумать над замыканием
  const handleFromPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    dispatch(setPriceFilter({ fromPrice: value, toPrice }));
  };
  const handleToPriceChange = (e) => {
    const value = parseFloat(e.target.value);
    dispatch(setPriceFilter({ fromPrice, toPrice: value }));
  };

  // тоже нужна оптимизация - при добавлении в список зависимостей onFilterChange сразу летит куча rerender'ов
  useEffect(() => {
    onFilterChenge({
      from: fromPrice,
      to: toPrice,
    });
  }, [fromPrice, toPrice]);

  return (
    <div className={s.container_sort}>
      <h3 className={s.price}>Price</h3>
      <input
        className={s.from}
        type="number"
        placeholder="from"
        value={fromPrice}
        onChange={handleFromPriceChange}
      />
      <input
        className={s.to}
        type="number"
        placeholder="to"
        value={toPrice}
        onChange={handleToPriceChange}
      />
    </div>
  );
}
