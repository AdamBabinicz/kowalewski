import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Contact from "./components/pages/Contact";
import Details from "./components/pages/Details";
import Carousel from "./components/pages/Carousel";
// import { Data } from "./components/variables/Data";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      {/* <Route path="/carousel" element={<Carousel />} /> */}
      <Route path="/zyciorys" element={<Contact />} />
      {/* <Route path="/awans" element={<Details />} /> */}
    </Routes>
  </Router>,
  document.getElementById("root")
);
