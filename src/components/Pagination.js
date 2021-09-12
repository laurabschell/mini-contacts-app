import React from "react";

function Pagination(props) {
  const totalPosts = props.totalPosts;
  const postsPerPage = props.postsPerPage;
  const paginate = props.paginate;
  const pageNumbers = [];

  for (let i = 1; 1 <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
