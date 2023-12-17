import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";
import DataItems from "../../menu_items";

export default function CategoriesMain() {
  
  const navigate = useNavigate();
  const styles = {
    swiperStyle : style.slides_for_categorries,
    slideStyle : style.slide
  }

  return (
    <div className={style.categoriesMain}>
      <div className={style.headers_h}>
        <h2>Categories</h2>
        <div className={style.line_and_button}>
          <div className={style.headers_h_line}></div>
          <button onClick={() => navigate("/categories")}>Categories</button>
        </div>
      </div>
      <DataItems URL={"http://localhost:3333/categories/all"} styles={styles}/>
    </div>
  );
}
