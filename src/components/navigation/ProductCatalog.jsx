import ProductCategories from './product-page/ProductCategories.jsx';
import SearchBar from '../ui/SearchBar.jsx';
import ProductSorting from './product-page/ProductSorting.jsx';
import './ProductCatalog.scss';

const ProductCatalog = ({
  onCategoryChange,
  onFilterChange,
  onPageChange,
  searchText,
  onSearchTextChange,
}) => {
  return (
    <div className="product-catalog-container">
      <div className="top-bar">
        <ProductCategories onCategoryChange={onCategoryChange} onPageChange={onPageChange} />
        <SearchBar
          onPageChange={onPageChange}
          searchText={searchText}
          onSearchTextChange={onSearchTextChange}
        />
      </div>

      <div className="sorting-wrapper">
        <ProductSorting onFilterChange={onFilterChange} onPageChange={onPageChange} />
      </div>
    </div>
  );
};

export default ProductCatalog;
