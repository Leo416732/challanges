import { useParams } from "react-router-dom";
import Pagination from "./Pagination";

export default function Page() {
  const pageNum = useParams();
  console.log(pageNum);
  return (
    <>
      <div className="pageID">Page Number {pageNum.id}</div>
      <div>
        <Pagination />
      </div>
    </>
  );
}
