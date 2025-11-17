import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-container">
      <FontAwesomeIcon icon={faSearch} className="search-icon" />
      <input
        type="text"
        id="product-search"
        className="form-control search-input"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
