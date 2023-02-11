import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>Challanges</h1>
      <div>
        <Link to={"/dogs"}>Dogs breeds</Link>
      </div>
      <div>
        <Link to={"/page/1"}>Pagination</Link>
      </div>
      <div>
        <Link to={"/tutorials"}>Tutorials</Link>
      </div>
    </>
  );
}
