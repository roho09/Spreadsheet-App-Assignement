'use client';

import React from 'react';
import useStore from '../store/useStore';

const UndoRedo: React.FC = () => {
  const { undo, redo } = useStore();

  return (
    <div className="flex space-x-4 p-4">
      <button
        onClick={undo}
        className="p-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 ease-in-out"
      >
        Undo
      </button>
      <button
        onClick={redo}
        className="p-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300 ease-in-out"
      >
        Redo
      </button>
    </div>
  );
};

export default UndoRedo;
