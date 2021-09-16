const initialState = {
  users: [],
  contactsTab: [],
  favoritesTab: [],
  favItems: [],
  notFavItems: [],
  loading: false,
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETUSERSREQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GETUSERSSUCCESS":
      return {
        ...state,
        users: action.payload.users.data,
        notFavItems: action.payload.users.data,
        contactsTab: action.payload.users.data,
        // .map((user) => ({
        //   ...user,
        //   is_favorite: false,
        // })),
        loading: false,
      };

    case "GETUSERSERROR":
      return {
        ...state,
        error: true,
        loading: false,
      };

    // case "ADD_CONTACT": {
    //   console.log(action.payload.first_name);
    //   if (!action.payload.fav) {
    //     return {
    //       ...state,
    //       contactsList: [...state.contactsList, action.payload],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //       favList: [...state.favList, action.payload],
    //     };
    //   }
    // }

    // case "REMOVE_CONTACT": {
    //   return {
    //     contactsList: state.contactsList.filter(
    //       (contact) => contact.id !== action.payload
    //     ),
    //     favList: state.favList.filter(
    //       (contact) => contact.id !== action.payload
    //     ),
    //   };
    // }

    case "ADD_TO_FAV": {
      return {
        ...state,
        favItems: [...state.favItems, action.payload.newFav],
        notFavItems: [
          ...state.notFavItems.filter((item) => item.id !== action.payload.id),
        ],
        favoritesTab: [...state.favoritesTab, action.payload.newFav],
        contactsTab: state.contactsTab.map((item) =>
          item.id === action.payload.id
            ? { ...item, is_favorite: !item.is_favorite }
            : item
        ),
      };
    }

    case "REMOVE_FROM_FAV": {
      return {
        ...state,
        favItems: [
          ...state.favItems.filter((item) => item.id !== action.payload.id),
        ],
        notFavItems: [...state.notFavItems, action.payload.newFav],
        favoritesTab: [
          ...state.favoritesTab.filter((item) => item.id !== action.payload.id),
        ],
        contactsTab: state.contactsTab.map((item) =>
          item.id === action.payload.id
            ? { ...item, is_favorite: !item.is_favorite }
            : item
        ),
      };
    }

    default:
      return state;
  }
};

export default userReducer;
