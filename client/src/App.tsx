import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// screens go here -------------------------------------------------
import LandingPage from "./screens/LandingPage/LandingPage";
import Dashboard from "./screens/Dashboard/Dashboard";
//--------------------------------------------------------------------
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
