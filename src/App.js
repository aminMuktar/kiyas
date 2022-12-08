import { Route, Routes } from "react-router-dom";
import About from "./Pages/About.js";
import ContactUs from "./Pages/ContactUs.js";
import Home from "./Pages/Home.js";
import Services from "./Pages/Services.js";
import Works from "./Pages/Works.js";
import NotFound from "./Components/NotFound.js";
import './App.css';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/works" element={<Works />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
