import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// screens go here -------------------------------------------------
import LandingPage from "./screens/LandingPage/LandingPage";
import Dashboard from "./screens/Dashboard/Dashboard";
import Portfolio from "./screens/Portfolio/Portfolio";
import Websites from "./screens/Websites/Websites";
//--------------------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/websites" element={<Websites/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
