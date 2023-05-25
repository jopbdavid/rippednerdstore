import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, Products } from "./pages";
import { Navbar, Footer, Error } from "./components";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
