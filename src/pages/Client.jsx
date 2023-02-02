import { useParams } from "react-router-dom";

export default function Client() {
  const pageNum = useParams();
  console.log(pageNum.id);
  return <div>{pageNum.id}</div>;
}
