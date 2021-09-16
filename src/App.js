import React, { useState } from "react";
import Pagination from "./components/Pagination/Pagination";
import useGetUsers from "./hooks/useGetUsers";
import { useSelector } from "react-redux";
import Main from "./components/Main/Main";
import ContactsList from "./components/ContactsList/ContactsList";
import FavoritesList from "./components/FavoritesList/FavoritesList";

const App = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [usersPerPage] = useState(4);

  useGetUsers();
  const users = useSelector((state) => state.usersReducer.users);

  // setting all arrays
  const contactsTab = useSelector((state) => state.usersReducer.contactsTab);
  const favoritesTab = useSelector((state) => state.usersReducer.favoritesTab);
  const error = useSelector((state) => state.usersReducer.error);
  const loading = useSelector((state) => state.usersReducer.loading);
  const favItems = useSelector((state) => state.usersReducer.favItems);
  const notFavItems = useSelector((state) => state.usersReducer.notFavItems);

  console.log(users);
  console.log(favItems);
  console.log(notFavItems);
  console.log(error);
  console.log(loading);
  console.log(contactsTab);
  console.log(favoritesTab);

  // const indexOfLastUser = currentPage * usersPerPage;
  // const indexOfFirstUser = indexOfLastUser - usersPerPage;
  // const currentUsers = contactsList.slice(indexOfFirstUser, indexOfLastUser);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Contacts App</h1>
      <Main
        favItems={favItems}
        notFavItems={notFavItems}
        users={users}
        error={error}
        loading={loading}
      />
      <FavoritesList items={favoritesTab} />
      <ContactsList items={contactsTab} />
      {/* <Pagination
        usersPerPage={usersPerPage}
        totalUsers={contactsList.length}
        paginate={paginate}
      /> */}
    </div>
  );
};

export default App;
