import Item from "../Item/"

function List ({ items = [ ]}) {
    const map = items.map((item) => {
        return (
            <Item key={item.id} item={item} />
        )
    });
    return(
        <ul>
            {map}
        </ul>
    )
}
export default List;