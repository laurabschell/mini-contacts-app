import React from "react";
import "../../../src/stylesheet.css";
import CardDisplay from "../CardDisplay/CardDisplay";

const Main = ({ loading, error, notFavItems, favItems }) => {
  if (loading) {
    return <h2>Loading... Please wait</h2>;
  }

  if (error) {
    return <h2>Error :(</h2>;
  }

  return (
    <div>
      <h2>Main tab</h2>
      <p>Array of favorites</p>
      <CardDisplay items={favItems} />
      <p>Array of non-favorite</p>
      <CardDisplay items={notFavItems} />
    </div>
  );
};

export default Main;
