import './App.css';
import List from './components/List';

function App() {
  const users = [
    {
      id: 0,
      name: 'Mushishi'
    },
    {
      id: 1,
      name: 'Bleach'
    },
    {
      id: 2,
      name: 'Dorohedoro'
    }
  ];


  return (
    <div>
      <List items={users} />
    </div>
  );
}

export default App;