// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Home } from "./Pages/Home/Home";
import { Infos } from "./Pages/Infos/Infos";
import { Stats } from "./Pages/Stats/Stats";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/infos" element={<Infos />} />
      <Route path="/stats" element={<Stats />} />
    </Routes>
  );
}