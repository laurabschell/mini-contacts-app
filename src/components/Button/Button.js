import React from "react";
import { useDispatch } from "react-redux";
import { addToFav, removeFromFav } from "../../redux/actions/usersActions";

const AddToFavButtonStyles = {
  backgroundColor: "#1E90FF",
  padding: ".5rem 1rem",
  border: "none",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

const RemoveFromFavButtonStyles = {
  backgroundColor: "#C71585",
  padding: ".5rem 1rem",
  border: "none",
  borderRadius: "10px",
  color: "white",
  cursor: "pointer",
};

function Button(props) {
  const user = props.user;
  console.log(user.is_favorite);
  const dispatch = useDispatch();
  return (
    <div>
      {!user.is_favorite ? (
        <button
          style={AddToFavButtonStyles}
          onClick={() =>
            dispatch(
              addToFav(user.id, { ...user, is_favorite: !user.is_favorite })
            )
          }
        >
          add to fav
        </button>
      ) : (
        <button
          style={RemoveFromFavButtonStyles}
          onClick={() =>
            dispatch(
              removeFromFav(user.id, {
                ...user,
                is_favorite: !user.is_favorite,
              })
            )
          }
        >
          remove from fav
        </button>
      )}
    </div>
  );
}

export default Button;
