import './ProductGrid.scss';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';
import { products } from '../../data/ProductList.js';

const ProductGrid = ({ currentPage, productsPerPage, category, sortFilters, searchText }) => {
  let result = products;

  // Filtering by category
  if (category) {
    result = result.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
  }
  // Filtering by searching
  if (searchText) {
    result = result.filter((p) => {
      return p.productName.toLowerCase().includes(searchText.toLowerCase());
    });
  }
  // Sorting by filters
  if (sortFilters) {
    const { size, color, brand, material, style, price } = sortFilters; // priceMin, priceMax
    {
      result = result
        .filter((p) => {
          if (!price) return true;
          if (price === 'low-high') return products.sort((a, b) => a.price - b.price);
          if (price === 'high-low') return products.sort((a, b) => b.price - a.price);
          if (price === 'under-50') return p.price < 50;
          if (price === '50-100') return p.price >= 50 && p.price <= 100;
          if (price === '100-200') return p.price >= 100 && p.price <= 200;
          if (price === 'over-200') return p.price > 200;
          return true;
        })
        .filter((p) => !size || p.sizes?.includes(size.toUpperCase()))
        .filter((p) => !color || p.colors?.some((c) => c.toLowerCase() === color.toLowerCase()))
        .filter((p) => !brand || p.brand?.toLowerCase() === brand.toLowerCase())
        .filter((p) => !material || p.material?.toLowerCase() === material.toLowerCase())
        .filter((p) => !style || p.style?.toLowerCase() === style.toLowerCase());
    }
  }

  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const visibleProducts = result.slice(start, end);

  return (
    <div className="product-grid-container mx-auto my-3">
      <div className="row g-3">
        {visibleProducts.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <ProductCard
              id={product.id}
              img={product.img}
              productName={product.productName}
              price={product.price}
              oldPrice={product.oldPrice}
              // color={product.colors}
              sizes={product.sizes}
            />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
