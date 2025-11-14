import './ProductGrid.scss';
import { Col } from 'react-bootstrap';
import ProductCard from './ProductCard.jsx';

const products = [
  {
    id: '001',
    img: 'https://placehold.co/250x250',
    productName: 'Product 1',
    price: '$100.00',
    oldPrice: '$150.00',
    discount: 'Save 33%',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Red', 'Blue', 'Green'],
  },
  {
    id: '002',
    img: 'https://placehold.co/250x250',
    productName: 'Product 2',
    price: '$120.00',
    oldPrice: '$180.00',
    discount: 'Save 33%',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White'],
  },
  {
    id: '003',
    img: 'https://placehold.co/250x250',
    productName: 'Product 3',
    price: '$90.00',
    oldPrice: '$130.00',
    discount: 'Save 30%',
    sizes: ['M', 'L', 'XL'],
    colors: ['Yellow', 'Pink'],
  },
  {
    id: '004',
    img: 'https://placehold.co/250x250',
    productName: 'Product 4',
    price: '$110.00',
    oldPrice: '$160.00',
    discount: 'Save 31%',
    sizes: ['S', 'M', 'L'],
    colors: ['Gray', 'Brown'],
  },
  {
    id: '005',
    img: 'https://placehold.co/250x250',
    productName: 'Product 5',
    price: '$130.00',
    oldPrice: '$200.00',
    discount: 'Save 35%',
    sizes: ['L', 'XL', 'XXL'],
    colors: ['Purple', 'Orange'],
  },
  {
    id: '006',
    img: 'https://placehold.co/250x250',
    productName: 'Product 6',
    price: '$140.00',
    oldPrice: '$210.00',
    discount: 'Save 33%',
    sizes: ['S', 'M', 'L'],
    colors: ['Cyan', 'Magenta'],
  },
  {
    id: '007',
    img: 'https://placehold.co/250x250',
    productName: 'Product 7',
    price: '$95.00',
    oldPrice: '$145.00',
    discount: 'Save 34%',
    sizes: ['M', 'L', 'XL'],
    colors: ['Teal', 'Navy'],
  },
  {
    id: '008',
    img: 'https://placehold.co/250x250',
    productName: 'Product 8',
    price: '$115.00',
    oldPrice: '$175.00',
    discount: 'Save 34%',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Olive', 'Maroon'],
  },
  {
    id: '009',
    img: 'https://placehold.co/250x250',
    productName: 'Product 9',
    price: '$105.00',
    oldPrice: '$155.00',
    discount: 'Save 32%',
    sizes: ['S', 'M', 'L'],
    colors: ['Lime', 'Coral'],
  },
  {
    id: '010',
    img: 'https://placehold.co/250x250',
    productName: 'Product 10',
    price: '$125.00',
    oldPrice: '$185.00',
    discount: 'Save 32%',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Silver', 'Gold'],
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid-container mx-auto my-3">
      <div className="row g-3">
        {products.map((product) => (
          <Col key={product.id} className="d-flex justify-content-center">
            <ProductCard
              _id={product._id}
              img={product.img}
              discount={product.discount}
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
