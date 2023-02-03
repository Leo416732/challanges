import { useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Pagination from "./components/Pagination";
import Client from "./pages/Client";
import "./styles/App.css";

function App() {
  const params = useParams();

  console.log("app", params);
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/page/:id" element={<Client />} />
        </Routes>
        {/* <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} /> */}
      </div>
    </>
  );
}

export default App;
