import { Outlet, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

export default function Client() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
