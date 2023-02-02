import { Route, Routes } from "react-router-dom";
import Pagination from "./components/Pagination";
import Client from "./pages/Client";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/page/:id" element={<Client />} />
        </Routes>
        <Pagination />
      </div>
    </>
  );
}

export default App;
