import Item from '../Item';

function List({ items = [], onItemClick }) {
  const handleOnItemClick = (item) => {
    onItemClick(item);
  }
  const map = items.map((item) => {
    return (
      <Item key={item.id} item={item} onItemClick={handleOnItemClick} />
    )
  });

  return (
    <div>
      <h3>Lista de Mangás</h3>
      <ul>
        {map}
      </ul>
    </div>
  );
}

export default List;