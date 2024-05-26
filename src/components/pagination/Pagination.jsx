import React from "react";
import "./style.css";
const Pagination = ({ limit, total, onChang, current }) => {
  const paginationNumbers = [];

  for (let i = 1; i <= Math.ceil(total / limit); i++) {
    paginationNumbers.push(i);
  }

  return (
    <div className="pagination">
      {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={current === pageNumber ? "active" : ""}
          onClick={() => onChang(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
