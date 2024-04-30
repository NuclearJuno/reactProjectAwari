import List from './components/List/List';
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const [itemState, setItemState] = useState([]);

  const loadDetails = (datapokemon) => {

    const promises = datapokemon.map((item) => {
      return fetch(item.url).then((response) => response.json())
    });
    Promise.all(promises)
      .then((items) => {
        setItemState(items);
      });
  }
  useEffect(() => {
    // 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { results } = data;
        loadDetails(results);
      })
      .catch(() => {
        console.error('Error');
      });
  }, []
  );

  return (
    <div>
      <h1>Pokedex</h1>
      <List items={itemState} />
    </div>
  );
}

export default App;
