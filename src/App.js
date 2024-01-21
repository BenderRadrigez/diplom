import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Header from "./components/header";
import Footer from "./components/footer";

import Categories from "./pages/CategoriesPage";
import Error from "./pages/ErrorPage";
import Main from "./pages/MainPage";
import SalesPage from "./pages/SalesPage";
import { getAllCategories } from "./requests/getCategories";
import ProductsFromCategory from "./pages/ProductsFromCategoryPage";
import AboutProductPage from "./pages/AboutProductPage";
import ProductsPage from "./pages/productsPage";
import BasketPage from "./pages/BasketPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<ProductsFromCategory />} />
        <Route path="/all-products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<AboutProductPage />} />
        <Route path="/all-sales" element={<SalesPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
