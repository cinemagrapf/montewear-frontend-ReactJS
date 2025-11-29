import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ searchText, onSearchTextChange, onPageChange }) => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        id="product-search"
        value={searchText}
        className="form-control search-input"
        placeholder="Search..."
        onChange={(e) => {
          onSearchTextChange(e.target.value);
          onPageChange(1);
        }}
      />
    </div>
  );
};

export default SearchBar;
