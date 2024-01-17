import React from 'react';

function Item({ item, onItemClick }) {
  const handleOnItemClick = () => {
    onItemClick && onItemClick(item);
  };
  return (
    <li>
      <h2>{item.name}</h2>
      <button type="button" onClick={handleOnItemClick}>Detalhes</button>
    </li>
  );
}
export default Item;
