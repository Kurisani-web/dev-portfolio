import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App({ element }) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );
}

export default App;
