// src/components/GridComponent.tsx

import React, { useState } from 'react';
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import Cell from './cell';
import useStore from '../store/useStore';
import SearchBar from './SearchBar';

const cellsPerPage = 100; // Number of cells per page

const GridComponent: React.FC = () => {
  const { cells, updateCell, undo, redo, searchQuery } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerms, setSearchTerms] = useState<string[]>([]);

  // Filter cells based on search terms
  const filteredCells = cells.filter(cell => 
    searchTerms.length === 0 || searchTerms.some(term => cell.content.toLowerCase().includes(term.toLowerCase()))
  );

  const indexOfLastCell = currentPage * cellsPerPage;
  const indexOfFirstCell = indexOfLastCell - cellsPerPage;
  const currentCells = filteredCells.slice(indexOfFirstCell, indexOfLastCell);

  const totalPages = Math.ceil(filteredCells.length / cellsPerPage);

  // Cell renderer for the grid
  const CellRenderer = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const cellIndex = rowIndex * 10 + columnIndex; // Locate cell based on row and column index
    const cell = currentCells[cellIndex];

    if (!cell) return null;

    return (
      <Cell
        id={cell.id}
        style={style}
        content={cell.content}
        alignment={cell.alignment}
        fontSize={cell.fontSize}
        type={cell.type}
      />
    );
  };

  return (
    <div className="p-6">
      {/* Search Input */}
      <SearchBar onSearch={setSearchTerms} />

      {/* Grid Rendering */}
      <div className="overflow-auto h-[600px]">
        <Grid
          columnCount={10} // Number of columns
          columnWidth={100} // Width of each column
          height={600} // Height of the grid view
          rowCount={Math.ceil(currentCells.length / 10)} // Number of rows
          rowHeight={50} // Height of each row
          width={1000} // Width of the grid view
        >
          {CellRenderer}
        </Grid>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-gray-300 px-4 py-2 rounded shadow-sm hover:bg-gray-400 transition"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="bg-gray-300 px-4 py-2 rounded shadow-sm hover:bg-gray-400 transition"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Undo/Redo Controls */}
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded shadow-sm hover:bg-gray-600 transition"
          onClick={() => undo()}
        >
          Undo
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded shadow-sm hover:bg-gray-600 transition"
          onClick={() => redo()}
        >
          Redo
        </button>
      </div>
    </div>
  );
};

export default GridComponent;
