import React from "react";
import Button from "../Button/Button";

function Card(props) {
  return (
    <div className="card" key={props.user_id}>
      <b>
        {props.user_first_name} {props.user_last_name}
      </b>
      <p>{props.user_email}</p>
      <Button user={props.user} notMain={props.notMain} />
    </div>
  );
}

export default Card;
