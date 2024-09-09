import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Solutions from "./Components/Solutions";
import AboutUs from "./Components/AboutUs";
import WhyUs from "./Components/WhyUs";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <AboutUs />
      <WhyUs />
    </>
  );
}

export default App;
