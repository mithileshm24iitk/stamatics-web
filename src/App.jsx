// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Mathemania from "./pages/Mathemania";

function App() {
  return (
    <div className="page-root">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mathemania" element={<Mathemania />} />
      </Routes>
    </div>
  );
}

export default App;
