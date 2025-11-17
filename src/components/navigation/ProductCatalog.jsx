import ProductCategories from './product-page/ProductCategories.jsx';
import ProductSearchBar from './product-page/ProductSearchBar.jsx';
import ProductSorting from './product-page/ProductSorting.jsx';

const ProductCatalog = () => {
  return (
    <div style={{ marginTop: '90px', paddingTop: '50px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <ProductCategories />
        <ProductSearchBar />
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <ProductSorting />
      </div>
    </div>
  );
};

export default ProductCatalog;
