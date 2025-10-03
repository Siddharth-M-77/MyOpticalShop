import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import ProductDetailPage from "./components/ProductDetailPage";
import ContactAboutPages from "./components/AboutUs";
import ContactUsPage from "./components/ContactUs";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/details" element={<ProductDetailPage />} />
        <Route path="/about" element={<ContactAboutPages />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
