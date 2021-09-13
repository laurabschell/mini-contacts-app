import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav class="pagination-bar">
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
