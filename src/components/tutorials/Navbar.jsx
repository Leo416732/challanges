import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/header.css";

export default function Header() {
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState("");
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
            navigate("/tutorials/html"), setActiveBtn("html");
          }}
        >
          Html
        </button>
        <button
          className={activeBtn === "css" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/tutorials/css"), setActiveBtn("css");
          }}
        >
          Css
        </button>
        <button
          className={activeBtn === "JS" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/tutorials/javascript"), setActiveBtn("JS");
          }}
        >
          JavaScript
        </button>
        <button
          className={activeBtn === "react" ? "active-button" : "disable-button"}
          onClick={() => {
            navigate("/tutorials/react"), setActiveBtn("react");
          }}
        >
          React
        </button>
      </nav>
    </header>
  );
}
