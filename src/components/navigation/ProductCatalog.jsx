import ProductCategories from './product-page/ProductCategories.jsx';
import SearchBar from '../ui/SearchBar.jsx';
import ProductSorting from './product-page/ProductSorting.jsx';
import './ProductCatalog.scss';

const ProductCatalog = () => {
  return (
    <div className="product-catalog-container">
      <div className="top-bar">
        <ProductCategories />
        <SearchBar />
      </div>

      <div className="sorting-wrapper">
        <ProductSorting />
      </div>
    </div>
  );
};

export default ProductCatalog;
