import React, { useState } from 'react';
import './ProductSorting.scss';

const ProductSorting = () => {
  const [filters, setFilters] = useState({
    price: '',
    size: '',
    color: '',
    brand: '',
    material: '',
    style: '',
  });

  const filterOptions = {
    price: [
      { value: '', label: 'Price' },
      { value: 'low-high', label: 'Low to High' },
      { value: 'high-low', label: 'High to Low' },
      { value: 'under-50', label: 'Under $50' },
      { value: '50-100', label: '$50 - $100' },
      { value: '100-200', label: '$100 - $200' },
      { value: 'over-200', label: 'Over $200' },
    ],
    size: [
      { value: '', label: 'Size' },
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: 'xxl', label: 'XXL' },
    ],
    color: [
      { value: '', label: 'Color' },
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'gray', label: 'Gray' },
      { value: 'blue', label: 'Blue' },
      { value: 'red', label: 'Red' },
      { value: 'green', label: 'Green' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'pink', label: 'Pink' },
      { value: 'beige', label: 'Beige' },
    ],
    brand: [
      { value: '', label: 'Brand' },
      { value: 'stussy', label: 'Stüssy' },
      { value: 'supreme', label: 'Supreme' },
      { value: 'acronym', label: 'Acronym' },
      { value: 'nike', label: 'Nike' },
      { value: 'gap', label: 'Gap' },
      { value: 'levis', label: "Levi's" },
      { value: 'uniqlo', label: 'Uniqlo' },
    ],
    material: [
      { value: '', label: 'Material' },
      { value: 'cotton', label: 'Cotton' },
      { value: 'polyester', label: 'Polyester' },
      { value: 'wool', label: 'Wool' },
      { value: 'silk', label: 'Silk' },
      { value: 'denim', label: 'Denim' },
      { value: 'linen', label: 'Linen' },
      { value: 'leather', label: 'Leather' },
    ],
    style: [
      { value: '', label: 'Style' },
      { value: 'streetwear', label: 'Streetwear' },
      { value: 'techwear', label: 'Techwear' },
      { value: 'casual', label: 'Casual' },
      { value: 'steampunk', label: 'Steampunk' },
      { value: 'formal', label: 'Formal' },
      { value: 'sporty', label: 'Sporty' },
      { value: 'vintage', label: 'Vintage' },
      { value: 'minimalist', label: 'Minimalist' },
    ],
  };

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="sort-module">
      <div className="filters-container">
        <span className="sort-label">SORT by:</span>

        <select
          name="price"
          value={filters.price}
          onChange={(e) => handleFilterChange('price', e.target.value)}
          className={`filter-dropdown ${!filters.price ? 'placeholder' : ''}`}>
          {filterOptions.price.map((option, index) => (
            <option
              key={option.value}
              id={`price-option-${option.value || 'default'}`}
              value={option.value}
              className={index === 0 ? 'placeholder-option' : ''}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="size"
          value={filters.size}
          onChange={(e) => handleFilterChange('size', e.target.value)}
          className={`filter-dropdown ${!filters.size ? 'placeholder' : ''}`}>
          {filterOptions.size.map((option, index) => (
            <option
              key={option.value}
              value={option.value}
              className={index === 0 ? 'placeholder-option' : ''}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="color"
          value={filters.color}
          onChange={(e) => handleFilterChange('color', e.target.value)}
          className={`filter-dropdown ${!filters.color ? 'placeholder' : ''}`}>
          {filterOptions.color.map((option, index) => (
            <option
              key={option.value}
              value={option.value}
              className={index === 0 ? 'placeholder-option' : ''}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="brand"
          value={filters.brand}
          onChange={(e) => handleFilterChange('brand', e.target.value)}
          className={`filter-dropdown ${!filters.brand ? 'placeholder' : ''}`}>
          {filterOptions.brand.map((option, index) => (
            <option
              key={option.value}
              value={option.value}
              className={index === 0 ? 'placeholder-option' : ''}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="material"
          value={filters.material}
          onChange={(e) => handleFilterChange('material', e.target.value)}
          className={`filter-dropdown ${!filters.material ? 'placeholder' : ''}`}>
          {filterOptions.material.map((option, index) => (
            <option
              key={option.value}
              value={option.value}
              className={index === 0 ? 'placeholder-option' : ''}>
              {option.label}
            </option>
          ))}
        </select>

        <select
          name="style"
          value={filters.style}
          onChange={(e) => handleFilterChange('style', e.target.value)}
          className={`filter-dropdown ${!filters.style ? 'placeholder' : ''}`}>
          {filterOptions.style.map((option, index) => (
            <option
              key={option.value}
              value={option.value}
              className={index === 0 ? 'placeholder-option' : ''}>
              {option.label}
            </option>
          ))}
        </select>

        <button className="apply-filters-btn">Apply Filters</button>
      </div>
    </div>
  );
};

export default ProductSorting;
