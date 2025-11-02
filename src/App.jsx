import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoPage from "./assets/pages/crypto-page/CryptoPage";
import NavComponent from "./assets/component/nav/NavComponent";
import QrPage from "./assets/pages/qr-page/QrPage";
import HomePage from "./assets/pages/home-page/HomePage";
import { useEffect, useState } from "react";
import ShortPage from "./assets/pages/short-page/ShortPage";

function App() {
  const [tipo, setTipo] = useState("");
  useEffect(() => {
    const pathVari = window.location.pathname;
    const segments = pathVari.split("/").filter(Boolean);
    const last = segments.length ? segments[segments.length - 1] : "";
    setTipo(last);
  }, []);
  return (
    <section className="containApp">
      <NavComponent tipo={tipo} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ed" element={<CryptoPage />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/shorter" element={<ShortPage />} />
      </Routes>
    </section>
  );
}

export default App;
