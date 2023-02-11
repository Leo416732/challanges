import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageBtn from "./PageBtn";
import "../../styles/page.css";

export default function Pagination() {
  const pageNum = useParams();
  const [currentPage, setCurrentPage] = useState(
    pageNum ? pageNum && Number(pageNum.id) : 1
  );
  useEffect(() => {
    setCurrentPage(pageNum ? pageNum && Number(pageNum.id) : 1);
  }, [pageNum]);
  const lastCount = 100;
  return (
    <div className="pagination">
      {currentPage > 1 && currentPage < lastCount && (
        <>
          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={"Өмнөх"} btnClass={"page-btn"} />
          </Link>
          {currentPage > 2 && (
            <>
              <Link to={`/page/${1}`} onClick={() => setCurrentPage(1)}>
                <PageBtn btnName={1} btnClass={"page-btn"} />
              </Link>
              <p>...</p>
            </>
          )}

          <Link
            to={`/page/${currentPage - 1}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <PageBtn btnName={currentPage - 1} btnClass={"page-btn"} />
          </Link>
          <Link to={`/page/${currentPage}`}>
            <PageBtn btnName={currentPage} btnClass={"page-active"} />
          </Link>
          {currentPage < lastCount - 1 && (
            <>
              <Link
                to={`/page/${currentPage + 1}`}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <PageBtn btnName={currentPage + 1} btnClass={"page-btn"} />
              </Link>
              <p>...</p>
            </>
          )}
          <Link
            to={`/page/${lastCount}`}
            onClick={() => setCurrentPage(lastCount)}
          >
            <PageBtn btnName={lastCount} btnClass={"page-btn"} />
          </Link>

          <Link
            to={`page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={"Дараах"} btnClass={"page-btn"} />
          </Link>
        </>
      )}
      {currentPage === 1 && (
        <>
          <Link to={`/page/${currentPage}`}>
            <PageBtn btnName={currentPage} btnClass={"page-active"} />
          </Link>
          <Link
            to={`/page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={currentPage + 1} btnClass={"page-btn"} />
          </Link>
          <Link
            to={`/page/${currentPage + 2}`}
            onClick={() => setCurrentPage(currentPage + 2)}
          >
            <PageBtn btnName={currentPage + 2} btnClass={"page-btn"} />
          </Link>
          <Link
            to={`/page/${currentPage + 3}`}
            onClick={() => setCurrentPage(currentPage + 3)}
          >
            <PageBtn btnName={currentPage + 3} btnClass={"page-btn"} />
          </Link>
          <p>...</p>
          <Link
            to={`/page/${lastCount}`}
            onClick={() => setCurrentPage(lastCount)}
          >
            <PageBtn btnName={lastCount} btnClass={"page-btn"} />
          </Link>
          <Link
            to={`page/${currentPage + 1}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <PageBtn btnName={"Дараах"} btnClass={"page-btn"} />
          </Link>
        </>
      )}
      {currentPage === lastCount && (
        <>
          <Link
            onClick={() => setCurrentPage(currentPage - 1)}
            to={`/page/${currentPage - 1}`}
          >
            <PageBtn btnName={"Өмнөх"} btnClass={"page-btn"} />
          </Link>
          <Link to={`/page/${1}`} onClick={() => setCurrentPage(1)}>
            <PageBtn btnName={1} btnClass={"page-btn"} />
          </Link>
          <p>...</p>
          <Link
            onClick={() => setCurrentPage(currentPage - 3)}
            to={`/page/${currentPage - 3}`}
          >
            <PageBtn btnName={currentPage - 3} btnClass={"page-btn"} />
          </Link>
          <Link
            onClick={() => setCurrentPage(currentPage - 2)}
            to={`/page/${currentPage - 2}`}
          >
            <PageBtn btnName={currentPage - 2} btnClass={"page-btn"} />
          </Link>
          <Link
            onClick={() => setCurrentPage(currentPage - 1)}
            to={`/page/${currentPage - 1}`}
          >
            <PageBtn btnName={currentPage - 1} btnClass={"page-btn"} />
          </Link>
          <Link to={`/page/${currentPage}`}>
            <PageBtn btnName={currentPage} btnClass={"page-active"} />
          </Link>
        </>
      )}
    </div>
  );
}
