import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import RsvpPage from "./pages/RsvpPage.jsx";
import DirectionsPage from "./pages/DirectionsPage.jsx";
import WhatToExpectPage from "./pages/WhatToExpectPage.jsx";
import GiftsPage from "./pages/GiftsPage.jsx";
import backgroundImage from "./assets/wedding-bg.jpg";

export default function App() {
  return (
    <HashRouter>
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(rgba(247, 243, 232, 0.0), rgba(220, 214, 196, 0.56)), url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="min-h-screen px-6 py-12 text-[#2d2520]">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rsvp" element={<RsvpPage />} />
          <Route path="/directions" element={<DirectionsPage />} />
          <Route path="/what-to-expect" element={<WhatToExpectPage />} />
          <Route path="/gifts" element={<GiftsPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
