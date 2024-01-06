import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./screens/Home";
import Infos from "./screens/Infos";
import Contact from "./screens/Contact";
import Programm from "./screens/Programm";
import PostWeddingSite from "./screens/PostWeddingSite";
import ContactList from "./screens/ContactList";
import React from "react";

import "./styles/main.css";
export default function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/Infos" element={<Infos />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ContactList" element={<ContactList />} />
          <Route path="/Programm" element={<Programm />} />
          <Route path="/PostWeddingSite" element={<PostWeddingSite />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}
