import style from "./style.module.scss";
import DataItems from "../../components/menu_items";
import NavInPages from "../../components/navInPages";

export default function Categories() {
  return (
    <main className={style.categories_main}>
      <NavInPages/>
      <h1>Categories</h1>
      <DataItems URL={"http://localhost:3333/categories/all"} styles={style} />
    </main>
  );
}
