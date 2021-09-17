import React from "react";
import CardDisplay from "../CardDisplay/CardDisplay";

const FavoritesList = ({ items }) => {
  return (
    <div>
      <h2>Favorites Tab</h2>
      <CardDisplay items={items} notMain={true} />
    </div>
  );
};

export default FavoritesList;
