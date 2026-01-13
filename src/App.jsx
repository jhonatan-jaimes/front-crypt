import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import CryptoPage from "./assets/pages/crypto-page/CryptoPage";
import NavComponent from "./assets/component/nav/NavComponent";
import QrPage from "./assets/pages/qr-page/QrPage";
import HomePage from "./assets/pages/home-page/HomePage";
import ShortPage from "./assets/pages/short-page/ShortPage";
import LoadPage from "./assets/pages/load-page/LoadPage";
import HashPage from "./assets/pages/hash/HashPage";

function App() {
  //require('dotenv').config();
  const [tipo, setTipo] = useState("");
  useEffect(() => {
    const pathVari = window.location.pathname;
    const segments = pathVari.split("/").filter(Boolean);
    const last = segments.length ? segments[segments.length - 1] : "";
    setTipo(last);
  }, []);
  const hideNav = /^\/[a-zA-Z0-9]{8}$/.test(location.pathname);
  return (
    <section className="containApp">
      {!hideNav && (
        <div className="conNav">
          <NavComponent tipo={tipo}/>
        </div>
      )}
      <Routes>
        <Route path="/:text" element={<LoadPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/ed" element={<CryptoPage />} />
        <Route path="/qr" element={<QrPage />} />
        <Route path="/shorter" element={<ShortPage />} />
        <Route path="/hash" element={<HashPage />} />
      </Routes>
    </section>
  );
}

export default App;
