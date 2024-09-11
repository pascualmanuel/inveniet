import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Solutions from "./Components/Solutions";
import AboutUs from "./Components/AboutUs";
import WhyUs from "./Components/WhyUs";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
