import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs/Programs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
