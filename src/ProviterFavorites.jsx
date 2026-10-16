import { createContext, useState } from 'react';
import { books } from './books.js';

export const ContextFavorites = createContext(null);

export const ProviderFavorites = ({ children }) => {
  const [idsFavorite, setIdsFavorites] = useState([]);

  const favoritesList = books.filter((book) => idsFavorite.includes(book.id));

  const addFavorites = (addId) => {
    setIdsFavorites((prev) => (prev.includes(addId) ? prev : [...prev, addId]));
  };

  const deleteFavorites = (deleteId) => {
    setIdsFavorites((prev) => {
      return prev.filter((id) => id !== deleteId);
    });
  };

  return (
    <ContextFavorites
      value={{
        idsFavorite,
        addFavorites,
        deleteFavorites,
        favoritesList,
        books,
      }}
    >
      {children}
    </ContextFavorites>
  );
};
