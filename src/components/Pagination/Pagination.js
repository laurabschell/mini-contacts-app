import React from "react";
import "../../stylesheet.css";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination-bar">
      {pageNumbers.map((number) => (
        <div key={number} className="page-item">
          <p onClick={() => paginate(number)} className="page-link">
            {number}
          </p>
        </div>
      ))}
    </nav>
  );
};

export default Pagination;
