import React from "react";
import { range } from "lodash";

const Pagination = ({ onPageChange, currentPage, perPage, totalnews }) => {
  const pageCount = Math.ceil(totalnews / perPage);

  const pages = range(1, pageCount + 1);

  return (
    <nav aria-label="page navigation">
      <ul className="pagination justify-content-center">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a
              className="page-link"
              style={{ cursor: "pointer" }}
              onClick={() => onPageChange(page)}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
