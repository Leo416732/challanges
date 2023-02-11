import { useNavigate } from "react-router-dom";
import "../../styles/client.css";

export default function ClientPage() {
  const navigate = useNavigate();
  return (
    <div className="client">
      <div className="html d-flex">
        <div>
          <img className="image" src="../html5-01.svg" alt="" />
        </div>
        <div>
          <h1>HTML</h1>
          <p>The language for building web pages</p>
          <button onClick={() => navigate("/tutorials/html")}>
            Learn Html
          </button>
        </div>
      </div>
      <div className="css d-flex">
        <div>
          <img className="image" src="../css3-01.svg" alt="" />
        </div>
        <div>
          {" "}
          <h1>CSS</h1>
          <p>The language for building web pages</p>
          <button onClick={() => navigate("/tutorials/html")}>Learn Css</button>
        </div>
      </div>
      <div className="js d-flex">
        <div>
          <img className="image" src="../js-01.svg" alt="" />
        </div>
        <div>
          <h1>JAVASCRIPT</h1>
          <p>The language for building web pages</p>
          <button onClick={() => navigate("/tutorials/html")}>
            Learn JavaScript
          </button>
        </div>
      </div>
      <div className="react d-flex">
        <div>
          <img className="image" src="../react-01.svg" alt="" />
        </div>
        <div>
          {" "}
          <h1>REACT</h1>
          <p>The language for building web pages</p>
          <button onClick={() => navigate("/tutorials/html")}>
            Learn React
          </button>
        </div>
      </div>
    </div>
  );
}
