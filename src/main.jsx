import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import { Analytics } from '@vercel/analytics/react';
 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
            <Analytics />
    <Router>
      <Routes>
        <Route path="/*" element={<App />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
