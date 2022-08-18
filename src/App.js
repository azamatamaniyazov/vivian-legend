import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Contacts from "./components/pages/contacts/Contacts";
import HomePage from "./components/pages/home/HomePage";
import ProductDetails from "./components/pages/productDetails/ProductDetails";
import ProductsPage from "./components/pages/products/ProductsPage";
import ShoppingCart from "./components/pages/shoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
