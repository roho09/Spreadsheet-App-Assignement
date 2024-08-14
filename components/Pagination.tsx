'use client';

import React, { useState } from 'react';
import useStore from '../store/useStore';

const Pagination: React.FC = () => {
  const [page, setPage] = useState(1);
  const cellsPerPage = 100; // Number of cells per page
  const { cells } = useStore();

  // Move to the next page if there are more cells
  const handleNext = () => {
    if (page * cellsPerPage < cells.length) {
      setPage(prevPage => prevPage + 1);
    }
  };

  // Move to the previous page if not on the first page
  const handlePrev = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  // Slice cells to show only those on the current page
  const paginatedCells = cells.slice((page - 1) * cellsPerPage, page * cellsPerPage);

  return (
    <div className="p-4">
      {/* Render paginated cells in a grid */}
      <div className="grid grid-cols-10 gap-0.5">
        {paginatedCells.map(cell => (
          <div key={cell.id} className="border border-gray-300 p-2 text-center text-sm">
            {cell.content}
          </div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded transition-transform duration-300 hover:scale-105 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm">
          Page {page} of {Math.ceil(cells.length / cellsPerPage)}
        </span>
        <button
          onClick={handleNext}
          disabled={page * cellsPerPage >= cells.length}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded transition-transform duration-300 hover:scale-105 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
