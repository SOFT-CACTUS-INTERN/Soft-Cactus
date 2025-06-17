import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";
import Agence from "./pages/Agence";
import Projets from "./pages/Projets";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Nopage from "./pages/Nopage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="agence" element={<Agence />} />
          <Route path="projets" element={<Projets />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
