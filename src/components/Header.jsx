import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState("home");
  return (
    <header>
      <nav>
        <img
          onClick={() => {
            navigate("/");
          }}
          src="../home.svg"
          alt=""
        />
        <button
          className={activeBtn === "html" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/html/default"), setActiveBtn("html");
          }}
        >
          Html
        </button>
        <button
          className={activeBtn === "css" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/css/default"), setActiveBtn("css");
          }}
        >
          Css
        </button>
        <button
          className={activeBtn === "JS" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/javascript/default"), setActiveBtn("JS");
          }}
        >
          JavaScript
        </button>
        <button
          className={activeBtn === "react" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/react/default"), setActiveBtn("react");
          }}
        >
          React
        </button>
      </nav>
    </header>
  );
}
