import React from "react";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export default function ItemCategories({ item }) {
  const navigate = useNavigate();

  return (
    <div className={style.slide}>
      <img
        src={`http://localhost:3333/${item.image}`}
        alt="img"
        onClick={() => navigate(`/categories/${item.id}`)}
      />
      <p onClick={() => navigate(`/categories/${item.id}`)}>{item.title}</p>
    </div>
  );
}
