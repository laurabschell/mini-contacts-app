import React from "react";
import CardDisplay from "../CardDisplay/CardDisplay";

const ContactsList = ({ items }) => {
  return (
    <div>
      <h2>Contacts Tab</h2>
      <CardDisplay items={items} notMain={true} />
    </div>
  );
};

export default ContactsList;
