import React, { useState, useEffect } from "react";
import Users from "./components/Users/Users";
import Pagination from "./components/Pagination/Pagination";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(8);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://reqres.in/api/users?page=1&per_page=12"
      );
      setUsers(res.data.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  console.log(users);

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(users);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
