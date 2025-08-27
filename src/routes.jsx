import React, { Fragment } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";

// Pages import
import Jackpot from "./components/pages/Jackpot";
import Lottery from "./components/pages/Lottery";
import Casino from "./components/pages/Casino";
import Poker from "./components/pages/Poker";
import Slots from "./components/pages/Slots";
import Sports from "./components/pages/Sports";
import MinesPage from "./components/pages/Mines"; 

export default function RoutesWrapper() {
  const location = useLocation(); 

  // Header hide kare multiple pages ke liye
  const hideHeader = ["/mines", "/lottery", "/jackpot"].includes(location.pathname);

  return (
    <Fragment>
      {!hideHeader && <Header />} {/* Header sirf tab dikhe jab path array me nahi hai */}

      <Routes>
        <Route path="/jackpot" element={<Jackpot />} />
        <Route path="/lottery" element={<Lottery />} />
        <Route path="/casino" element={<Casino />} />
        <Route path="/poker" element={<Poker />} />
        <Route path="/slots" element={<Slots />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/mines" element={<MinesPage />} />
      </Routes>
    </Fragment>
  );
}
