import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Categories from "./pages/CategoriesPage";
import Error from "./pages/ErrorPage";
import Main from "./pages/MainPage";
import Sales from "./pages/SalesPage";
import Footer from "./components/footer";
import Header from "./components/header";
import Products from "./pages/productsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCategories } from "./requests/getCategories";

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
        <Route path="/categories/:title" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/all-sales" element={<Sales />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
