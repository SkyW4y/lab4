import { useContext } from 'react';
import { BookCard } from './BookCard';
import { ContextFavorites } from './ProviterFavorites';

export const Favorites = ({}) => {
  const { deleteFavorites, favoritesList } = useContext(ContextFavorites);
  return (
    <div>
      <h3>Список избранного</h3>
      {favoritesList.length === 0 ? (
        <p>Избранное пусто</p>
      ) : (
        <div>
          {favoritesList.map((book) => (
            <BookCard
              key={book.id}
              {...book}
              isFavorite={true}
              onAdd={deleteFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};
