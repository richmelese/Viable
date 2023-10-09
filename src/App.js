// import React from 'react';
import logo from "./logo.svg";
import "./App.css";
import Menu from "./Components/menu/Menu";
import Footer from "./Components/Footer/Footer";
import Home from "./Page/Home/Home";
import About from "./Page/About/About";
import Solution from "./Page/Solution/Solution";
import Businessactivites from "./Page/BusinessActivites/Businessactivites";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
// import Contactus from "./Page/Contactus";
import ContactUs from "./Page/Contact/Contact";

import HomeDetail from "./Page/HomeDetail/HomeDetail";
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contactus" element={<ContactUs />}></Route>
        <Route path="/Solution" element={<Solution />}></Route>
        <Route
          path="/Businessactivites"
          element={<Businessactivites />}
        ></Route>
        <Route path="/HomeDetail" element={<HomeDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
