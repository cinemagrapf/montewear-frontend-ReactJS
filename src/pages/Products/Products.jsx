import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import ProductGrid from '../../components/cards/ProductGrid.jsx';
import ProductCatalog from '../../components/navigation/ProductCatalog.jsx';
import ProductPagination from '../../components/navigation/ProductPagination.jsx';
import './Products.scss';

function Products() {
  return (
    <div className="App">
      <Header />
      <div className="products-page">
        <ProductCatalog />
        <ProductGrid />
        <ProductPagination />
      </div>
      <Footer />
    </div>
  );
}

export default Products;
