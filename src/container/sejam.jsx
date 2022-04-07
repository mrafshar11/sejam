import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import FullNotifs from "../components/FullNotifs";
import FullNews from './../components/FullNews';
import Home from "./Home";

const Sejam = () => {
  return (
    <Routes>
      <Route path="Notifications" element={<FullNotifs />} />
      <Route path="News" element={<FullNews />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Sejam;
