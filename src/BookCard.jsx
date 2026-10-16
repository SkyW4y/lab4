import { Link } from 'react-router';

export const BookCard = (props) => {
  const { id, author, title, isFavorite, onAdd } = props;

  return (
    <div>
      Автор - {author}
      <br />
      Название - <Link to={`/books/${id}`}>{title}</Link>
      <br />
      Номер- {id}
      <button onClick={() => onAdd(id)}>
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </button>
    </div>
  );
};
