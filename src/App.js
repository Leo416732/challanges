import React from "react";
import { Route, Routes } from "react-router-dom";
import Client from "./components/tutorials/Client";
import Css from "./components/tutorials/Css";
import Home from "./components/Home";
import Html from "./components/tutorials/Html";
import JavaScript from "./components/tutorials/JavaScript";
import ReactPage from "./components/tutorials/React";
import Intro from "./components/tutorials/sub-html/Intro";
import "./styles/App.css";
import HtmlHome from "./components/tutorials/sub-html/HtmlHome";
import ClientPage from "./components/tutorials/ClientPage";
import Editors from "./components/tutorials/sub-html/Editors";
import Element from "./components/tutorials/sub-html/Element";
import Page from "./components/pagination/Page";
import Dogs from "./components/dogs/Dogs";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/:id" element={<Page />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/tutorials/" element={<Client />}>
            <Route index element={<ClientPage />} />
            <Route path="html/*" element={<Html />}>
              <Route path="intro" element={<Intro />} />
              <Route path="home" element={<HtmlHome />} />
              <Route path="element" element={<Element />} />
              <Route path="editors" element={<Editors />} />
            </Route>
            <Route path="javascript/*" element={<JavaScript />}></Route>
            <Route path="react" element={<ReactPage />}></Route>
            <Route path="css" element={<Css />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
