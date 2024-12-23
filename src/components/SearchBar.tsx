import React, { useState } from 'react';
import '../styles/searchbar.css';

const categories = [
  'Select category',
  'Induction components',
  'Intercooler',
  'Pressure converter',
  'Turbo gasket',
  'Turbocharger',
  'Washer system',
  'Wiper arm',
];

const SearchBar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Select category');
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = () => {
    console.log(`Category: ${selectedCategory}, Search Input: ${searchInput}`);
    // will Implement search functionality here
  };

  return (
    <div className="search-bar">
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="category-select"
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Enter a keyword or product SKU"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
