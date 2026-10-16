import { useContext } from 'react';
import { BookCard } from './BookCard.jsx';
import { ContextFavorites } from './ProviterFavorites.jsx';

export const Catalog = () => {
  const { books, idsFavorite, addFavorites, deleteFavorites } =
    useContext(ContextFavorites);

  return (
    <div>
      <h3>Список литературы</h3>
      <div>
        {books.map((book) => (
          <BookCard
            key={book.id}
            {...book}
            isFavorite={idsFavorite.includes(book.id)}
            onAdd={
              idsFavorite.includes(book.id) ? deleteFavorites : addFavorites
            }
          />
        ))}
      </div>
    </div>
  );
};
