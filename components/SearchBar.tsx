// src/components/SearchBar.tsx

import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (terms: string[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    onSearch(input.split(' ').filter(term => term.trim() !== ''));
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
        className="border p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
