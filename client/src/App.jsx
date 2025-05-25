import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Import these
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ element }) {
  return (
    <>
      <Navbar />
      {element}
      <Footer />

      {/* ✅ Add ToastContainer at the root */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
