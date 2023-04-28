import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Business from "./Pages/Business/Business";
import Menu from "./components/menu";
import NavMenu from "./components/NavMenu";
import New from "./Pages/News/New";
import Solution from "./Pages/Solution/Solution";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <NavMenu />
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Business" element={<Business />}></Route>
        <Route path="/news" element={<New />}></Route>
        <Route path="/solution" element={<Solution />}></Route>
      </Routes>
    </div>
  );
}

export default App;
