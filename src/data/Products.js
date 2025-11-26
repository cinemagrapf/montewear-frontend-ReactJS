export const products = [
  // i = 1..100
  ...Array.from({ length: 100 }, (_, index) => {
    const i = index + 1;

    const categories = ['Men', 'Women', 'Kid'];
    const brands = ['Stüssy', 'Supreme', 'Acronym', 'Nike', 'Gap', "Levi's", 'Uniqlo'];
    const materials = ['cotton', 'polyester', 'wool', 'silk', 'denim', 'linen', 'leather'];
    const styles = [
      'streetwear',
      'techwear',
      'casual',
      'steampunk',
      'formal',
      'sporty',
      'vintage',
      'minimalist',
    ];
    const colors = ['black', 'white', 'gray', 'blue', 'red', 'green', 'yellow', 'pink', 'beige'];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

    return {
      id: i.toString().padStart(3, '0'),
      img: 'https://placehold.co/250x250',
      productName: `Product ${i}`,
      price: Number((20 + ((i * 1.73) % 160)).toFixed(2)),

      sizes: [sizes[i % 6], sizes[(i + 2) % 6], sizes[(i + 4) % 6]],

      colors: [colors[i % 9], colors[(i * 2) % 9]],

      category: categories[i % 3],
      brand: brands[i % 7],
      material: materials[i % 7],
      style: styles[i % 8],
    };
  }),
];
