import ProductCategories from './product-page/ProductCategories.jsx';
import ProductSearchBar from './product-page/ProductSearchBar.jsx';
import ProductSorting from './product-page/ProductSorting.jsx';
import './ProductCatalog.scss';

const ProductCatalog = () => {
  return (
    <div className="product-catalog-container">
      <div className="top-bar">
        <ProductCategories />
        <ProductSearchBar />
      </div>

      <div className="sorting-wrapper">
        <ProductSorting />
      </div>
    </div>
  );
};

export default ProductCatalog;
