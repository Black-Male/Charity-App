import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Char from "./components/charity/Char";
import Home from "./components/LandingPage/Home";
import Nav from "./components/Nav";
import List from "./components/charity/List";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/charity" element={<Char />} />
          <Route path="list" element={<List />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
