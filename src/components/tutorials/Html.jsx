import { Outlet } from "react-router-dom";
import "../../styles/html.css";

export default function Html() {
  return (
    <div className="current-html">
      <div className="sideMenu">
        <a href="/tutorials/html/home">Html Home</a>
        <a href="/tutorials/html/intro">Html Intro</a>
        <a href="/tutorials/html/element">Html Element</a>
        <a href="/tutorials/html/editors">Html Editors</a>
      </div>
      <div className="body">
        <Outlet />
      </div>
    </div>
  );
}
