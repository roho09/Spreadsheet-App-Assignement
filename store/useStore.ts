// src/store/useStore.ts

import { Cell } from 'tailwind.config';
import { create } from 'zustand';

interface StoreState {
  cells: Cell[];
  past: Cell[][];
  future: Cell[][];
  searchQuery: string;
  updateCell: (id: string, content: string) => void;
  undo: () => void;
  redo: () => void;
  setAlignment: (id: string, alignment: 'left' | 'center' | 'right') => void;
  setFontSize: (id: string, fontSize: number) => void;
  setSearchQuery: (query: string) => void;
}

const useStore = create<StoreState>((set) => ({
  cells: Array.from({ length: 1000 }, (_, index) => ({
    id: index.toString(),
    content: '',
    alignment: 'left',
    fontSize: 14,
    rowIndex: Math.floor(index / 10),
    columnIndex: index % 10,
    type: 'text',
  })),
  past: [],
  future: [],
  searchQuery: '',
  updateCell: (id, content) =>
    set((state) => {
      const updatedCells = state.cells.map((cell) =>
        cell.id === id ? { ...cell, content } : cell
      );
      return {
        cells: updatedCells,
        past: [...state.past, state.cells],
        future: [],
      };
    }),
  undo: () =>
    set((state) => {
      if (state.past.length === 0) return state;
      const [lastState, ...restPast] = state.past;
      return {
        cells: lastState,
        past: restPast,
        future: [state.cells, ...state.future],
      };
    }),
  redo: () =>
    set((state) => {
      if (state.future.length === 0) return state;
      const [nextState, ...restFuture] = state.future;
      return {
        cells: nextState,
        past: [...state.past, state.cells],
        future: restFuture,
      };
    }),
  setAlignment: (id, alignment) =>
    set((state) => ({
      cells: state.cells.map((cell) =>
        cell.id === id ? { ...cell, alignment } : cell
      ),
    })),
  setFontSize: (id, fontSize) =>
    set((state) => ({
      cells: state.cells.map((cell) =>
        cell.id === id ? { ...cell, fontSize } : cell
      ),
    })),
  setSearchQuery: (query) => set(() => ({ searchQuery: query })),
}));

export default useStore;
