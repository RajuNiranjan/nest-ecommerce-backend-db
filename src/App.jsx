import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/Global.scss";
import Home from "./pages/HOME/Home";
import Nav from "./components/NAV/Nav";
import Footer from "./components/FOOTER/Footer";
import Prodact from "./pages/PRODACT/Prodact";
import Cart from "./pages/CART/Cart";

const App = () => {
  return (
    <div className="App">
      <Router >
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Prodact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
