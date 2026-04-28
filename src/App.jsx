import { Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import CryptoDesk from "./components/CryptoDesk.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route path="/crypto-desk" element={<CryptoDesk />} />
        <Route path="/flights" element={<h1>Flights Page</h1>} />
        <Route path="/web-design" element={<h1>Web Design Page</h1>} />
        <Route path="/subscriptions" element={<h1>Subscriptions Page</h1>} />


      </Routes>
      <ScrollToTopButton />
      <WhatsAppButton />
    </>
  );
}

export default App;
