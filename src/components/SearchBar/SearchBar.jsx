
import toast from 'react-hot-toast';
import s from "./SearchBar.module.css"
const SearchBar = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const search = form.elements.search.value;
    if (search.trim() === '') {
      toast.error(`Введіть текст для пошуку зображень`);
      return;
    }
    onSearch(search.trim());
    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={handleSubmit}>
        <button className={s.search} type="submit">Почати пошук</button>
        <input
          className={s.input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Введіть дані для пошуку"
        />
      </form>
    </header>
  );
};
export default SearchBar;
