/* Styles */
import "./App.css";
/* Modules */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/* Pages */
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";
import ContactMe from "./pages/ContactMe.js";
import Footer from "./components/Footer.js";

/* Root */
export default function App() {
  return (
    <Router>
      <div className=" bg-black fixed top-0 left-0 w-full h-full flex flex-col gap-5  items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
