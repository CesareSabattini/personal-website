import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scenes/Home.jsx";
import About from "./scenes/About.jsx";
import Contacts from "./scenes/Contacts.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
