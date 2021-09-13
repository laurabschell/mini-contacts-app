import React from "react";
import "../../../src/stylesheet.css";

const Users = ({ users, loading, error }) => {
  if (loading) {
    return <h2>Loading... Please wait</h2>;
  }

  if (error) {
    return <h2>Ups... There's been an error</h2>;
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
