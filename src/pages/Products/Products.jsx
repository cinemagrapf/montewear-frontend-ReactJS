import { useState } from 'react';
import Header from '../../components/layout/Header.jsx';
import Footer from '../../components/layout/Footer.jsx';
import ProductGrid from '../../components/cards/ProductGrid.jsx';
import ProductCatalog from '../../components/navigation/ProductCatalog.jsx';
import ProductPagination from '../../components/navigation/ProductPagination.jsx';
import './Products.scss';

function Products() {
  const [page, setPage] = useState(1);

  // Example: how many products per page
  const productsPerPage = 20;

  return (
    <div className="App">
      <Header />

      <div className="products-page">
        <ProductCatalog />

        <ProductGrid currentPage={page} productsPerPage={productsPerPage} />

        <ProductPagination
          currentPage={page}
          totalPages={5} // adjust based on real data length / productsPerPage
          onPageChange={setPage}
        />
      </div>

      <Footer />
    </div>
  );
}

export default Products;
