import { useState } from 'react';
import s from "./SearchBar.module.css"
import toast from 'react-hot-toast';
const SearchBar = ({ onSubmit, query }) => {
  const [typingQuery, setTypingQuery] = useState(query ?? '');

  const handleChange = e => {
    setTypingQuery(e.target.value) 
  };
  const resetTypingQuery = () => {
    setTypingQuery('');
    
  };

  return (
    <form className={s.searchBar} onSubmit={onSubmit}>
      <div className={s.searchBox} tabIndex={1}>
        <div className={s.searchInputGroup}>
          <input
            className={s.searchInput}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={handleChange}
            value={typingQuery}
          />
          {typingQuery !== '' && (
            <button
              type="button"
              className={s.resetBtn}
              onClick={resetTypingQuery}
            >Resset
            </button>
          )}
        </div>
        <button type="submit" className={s.searchBtn}>Search
        </button>
      </div>
    </form>
  );
};
export default SearchBar;