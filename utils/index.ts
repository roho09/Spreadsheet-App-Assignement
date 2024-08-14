export * from './validation';
// Add other exports here as you create more utility files

export const generateGrid = (rows: number, cols: number) => {
    return Array.from({ length: rows }).map((_, rowIndex) =>
      Array.from({ length: cols }).map((_, colIndex) => ({
        id: `${rowIndex}-${colIndex}`,
        content: '',
      }))
    );
  };
  