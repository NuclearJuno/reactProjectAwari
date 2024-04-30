import List from './components/List/List';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';

const Contato = () => <h1>Contato</h1>;

const Loading = () => {
  return <h2>Carregando...</h2>
}

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadDetails = (items) => {
    const promises = items.map((item) => {
      return fetch(item.url).then((response) => response.json())
    });

    Promise.all(promises)
      .then((data) => {
        setTimeout(() => {
          setItems(data);
          setLoading(false);
        }, 2000);
      });
  }

  useEffect(() => {
    setLoading(true);

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
  }, []);

  return (
    <div>
      <Contato />
      <br />
      <Header />
      {loading ?
        <Loading />
        :
        <List items={items} />
      }
      <List items={items} />
    </div>
  );
}

export default App;
