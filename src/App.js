import { Route, Routes } from "react-router-dom";
import "./App.scss";
import AllProducts from "./pages/AllProductsPage";
import Categories from "./pages/CategoriesPage";
import Error from "./pages/ErrorPage";
import Main from "./pages/MainPage";
import Sales from "./pages/SalesPage";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="categories" element={<Categories />} />
        <Route path="/all_products" element={<AllProducts />} />
        <Route path="/all_sales" element={<Sales />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
