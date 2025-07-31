import { Route, Routes } from "react-router-dom";
import "./App.css";
import CryptoPage from "./assets/pages/crypto-page/CryptoPage";
import NavComponent from "./assets/component/nav/NavComponent";

function App() {
  return (
    <section className="containApp">
      <NavComponent />
      <Routes>
        <Route path="/crypto" element={<CryptoPage />} />
      </Routes>
    </section>
  );
}

export default App;
