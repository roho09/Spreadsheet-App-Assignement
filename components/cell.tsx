import React, { CSSProperties } from 'react';
import useStore from '../store/useStore';

interface CellProps {
  id: string;
  style?: CSSProperties;
}

const Cell: React.FC<CellProps> = ({ id, style }) => {
  const { cells, updateCell, setAlignment, setFontSize } = useStore();
  const cell = cells.find((c) => c.id === id);

  if (!cell) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCell(id, e.target.value);
  };

  return (
    <div
      style={{
        textAlign: cell.alignment,
        fontSize: `${cell.fontSize}px`,
        ...style,
      }}
      className="cell border border-gray-300 p-2"
    >
      <input
        type={cell.type === 'numeric' ? 'number' : 'text'}
        value={cell.content}
        onChange={handleChange}
        className="w-full h-full border-none outline-none bg-transparent"
        style={{
          textAlign: cell.alignment,
          fontSize: `${cell.fontSize}px`,
        }}
      />
    </div>
  );
};

export default Cell;
