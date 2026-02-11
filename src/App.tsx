import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import baseUrl from "./constants/baseUrl";
import Home from "./pages/Home";
import Programs from "./pages/Programs/Programs";
import ProgramDetail from "./pages/Programs/ProgramDetail";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <BrowserRouter basename={baseUrl}>
      <div className="appShell">
        <Header />
        <Navbar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />
        <div className="pageShell">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
