import { BrowserRouter, Routes, Route } from "react-router-dom";
import baseUrl from "./constants/baseUrl";
import Home from "./pages/Home";
import Programs from "./pages/Programs/Programs";
import ProgramDetail from "./pages/Programs/ProgramDetail";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter basename={baseUrl}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:slug" element={<ProgramDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
