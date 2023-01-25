import "./App.css";
import Header from "./Layout/Header";
import HomePage from "./Pages/HomePage";
import Footer from "./Layout/Footer";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="container-fluid p-0 m-0">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
