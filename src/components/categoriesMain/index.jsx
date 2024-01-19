import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import ItemsConstructor from "../itemsConstructor";

export default function CategoriesMain() {
  const navigate = useNavigate();

  return (
    <div className={style.categoriesMain}>
      <div className={style.headers_h}>
        <h2>Categories</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button onClick={() => navigate("/categories")}>Categories</button>
        </div>
      </div>
      <ItemsConstructor isSlider={true} isCategories={true} />
    </div>
  );
}
