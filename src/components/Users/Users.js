import React from "react";
import { stylesheet } from "../../src/stylesheet.css";

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(users);
  return (
    <div className="card-list">
      {users.map((user) => (
        <div className="card" key={user.id}>
          {user.first_name} {user.last_name}
          <br />
          {user.email}
        </div>
      ))}
    </div>
  );
};

export default Users;
