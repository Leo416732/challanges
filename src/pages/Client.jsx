import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";

export default function Client() {
  const pageNum = useParams();
  console.log("client", pageNum.id);
  return (
    <div>
      <div className="clientPage">{pageNum.id}</div>
      <Pagination />
    </div>
  );
}
