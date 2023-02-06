import { Outlet, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Client() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
