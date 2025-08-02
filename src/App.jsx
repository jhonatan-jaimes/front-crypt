import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoPage from "./assets/pages/crypto-page/CryptoPage";
import NavComponent from "./assets/component/nav/NavComponent";
import QrPage from "./assets/pages/qr-page/QrPage";

function App() {
  return (
    <section className="containApp">
      <NavComponent />
      <Routes>
        <Route path="/crypto" element={<CryptoPage />} />
        <Route path="/qr" element={<QrPage />} />
      </Routes>
    </section>
  );
}

export default App;
