import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Solutions from "./Components/Solutions";
import AboutUs from "./Components/AboutUs";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nosotros from "./Pages/Nosotros";
import Equipamiento from "./Pages/Equipamiento";
import FAQPage from "./Pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/equipamiento" element={<Equipamiento />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
