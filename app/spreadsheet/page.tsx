"use client";

import React, { useState } from 'react';
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import Cell from '@/components/cell';
import useStore from '@/store/useStore'; // Import global styles

const cellsPerPage = 100; // Number of cells per page

const SpreadsheetPage = () => {
  const { cells, updateCell, undo, redo } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering all cells before applying pagination
  const filteredCells = cells.filter(cell =>
    cell.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastCell = currentPage * cellsPerPage;
  const indexOfFirstCell = indexOfLastCell - cellsPerPage;
  const currentCells = filteredCells.slice(indexOfFirstCell, indexOfLastCell);

  const totalPages = Math.ceil(filteredCells.length / cellsPerPage);

  // Cell renderer
  const CellRenderer = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const cell = currentCells.find((c) => c.rowIndex === rowIndex && c.columnIndex === columnIndex);

    if (!cell) return null;

    return (
      <Cell
        id={cell.id}
        style={style} content={''} alignment={'left'} fontSize={0} type={'text'}      />
    );
  };

  return (
    <div className="p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search cells"
        className="mb-4 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Reset to the first page when search term changes
        }}
      />

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

export default SpreadsheetPage;
