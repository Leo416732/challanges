import { Outlet } from "react-router-dom";
import "../styles/html.css";

export default function Html() {
  return (
    <>
      <div className="sideMenu">
        <a href="/hmtl/intro">Html Home</a>
        <a href="">Html Intro</a>
        <a href="">Html Element</a>
        <a href="">Html Editors</a>
        <Outlet />
      </div>
    </>
  );
}
