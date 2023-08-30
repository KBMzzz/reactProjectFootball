import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Content from "./components/Content";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
