import './ProductGrid.scss';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';
import { products } from '../../data/products.js';

const ProductGrid = ({ currentPage, productsPerPage, category }) => {
  // Filtering by category
  const filteredProducts = products.filter((p) =>
    category ? p.category?.toLowerCase() === category.toLowerCase() : true,
  );
  const start = (currentPage - 1) * productsPerPage;
  const end = start + productsPerPage;

  const visibleProducts = filteredProducts.slice(start, end);

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
              // Filtering props
              category={product.category}
              brand={product.brand}
              material={product.material}
              style={product.style}
            />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
