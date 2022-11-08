import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useGetAllProductsQuery, useGetCategoriesQuery } from "../api/apiSlice";
import Layout from "../components/layout/Layout";
import Contact from "../components/pages/contact/Contact";
import NotFound from "../components/pages/error/NotFound";
import HomePage from "../components/pages/home/HomePage";
import ProductDetails from "../components/pages/productDetails/ProductDetails";
import ProductsPage from "../components/pages/products/ProductsPage";
import { uploadProducts } from "../components/pages/products/productsSlice";
import ShoppingCart from "../components/pages/shoppingCart/ShoppingCart";
import UserPanel from "../components/pages/userPanel/UserPanel";
import { uploadCategories } from "../slices/categorySlice";

function App() {
  const {
    data: products,
    isLoading: productsLoading,
    isSuccess: productsSuccess,
  } = useGetAllProductsQuery();
  const {
    data: categories,
    isLoading: categoriesLoading,
    isSuccess: categoriesSuccess,
  } = useGetCategoriesQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    categoriesSuccess && dispatch(uploadCategories(categories.payload));
    productsSuccess && dispatch(uploadProducts(products.payload));
  }, [categories, products]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user" element={<UserPanel />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
