import React, { useState } from "react";
import Users from "./components/Users/Users";
import Pagination from "./components/Pagination/Pagination";
import useGetUsers from "./hooks/useGetUsers";
import { useSelector } from "react-redux";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  useGetUsers();
  const contactsList = useSelector((state) => state.usersReducer.contactsList);
  const error = useSelector((state) => state.usersReducer.error);
  const loading = useSelector((state) => state.usersReducer.loading);
  console.log(contactsList);
  console.log(error);
  console.log(loading);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentUsers);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Users users={currentUsers} error={error} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={contactsList.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
