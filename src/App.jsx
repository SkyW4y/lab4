import { useContext } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router';
import { Catalog } from './Catalog.jsx';
import { Favorites } from './Favorites.jsx';
import { BookCard } from './BookCard.jsx';
import { ContextFavorites } from './ProviterFavorites.jsx';

function Menu() {
  const { idsFavorite } = useContext(ContextFavorites);

  return (
    <nav>
      <Link to="/">Каталог</Link>{' '}
      <Link to="/favorites">Избранное ({idsFavorite.length})</Link>
    </nav>
  );
}

function BookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    books,
    idsFavorite,
    addFavorites,
    deleteFavorites,
  } = useContext(ContextFavorites);
  const book = books.find((item) => item.id === Number(id));

  return (
    <div>
      <button onClick={() => navigate(-1)}>Назад</button>
      {book ? (
        <BookCard
          {...book}
          isFavorite={idsFavorite.includes(book.id)}
          onAdd={
            idsFavorite.includes(book.id) ? deleteFavorites : addFavorites
          }
        />
      ) : (
        <p>Книга не найдена</p>
      )}
    </div>
  );
}

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/books/:id" element={<BookPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
