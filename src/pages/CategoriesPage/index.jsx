import style from "./style.module.scss";
import NavInPages from "../../components/navInPages";
import ItemsConstructor from "../../components/itemsConstructor";

export default function Categories() {
  return (
    <main className={style.categories_main}>
      <NavInPages/>
      <h1>Categories</h1>
      <ItemsConstructor isCategories={true} styles={style}/>
    </main>
  );
}
