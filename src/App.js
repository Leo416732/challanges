import React, { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Client from "./pages/Client";
import Css from "./pages/Css";
import Home from "./pages/Home";
import Html from "./pages/Html";
import JavaScript from "./pages/JavaScript";
import ReactPage from "./pages/React";
import Intro from "./pages/sub-html/Intro";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Client />}>
            <Route path="/" element={<Home />} />
            <Route path="/html/default" element={<Html />}>
              <Route path="/html/intro" element={<Intro />} />
            </Route>
            <Route path="/javascript/default" element={<JavaScript />}></Route>
            <Route path="/react/default" element={<ReactPage />}></Route>
            <Route path="/css/default" element={<Css />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
