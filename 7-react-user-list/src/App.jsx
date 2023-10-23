import './App.css';
import List from './components/List';
import Title from './components/Title';

function App() {
  const users = [
    {
      id: 0,
      name: "Laura",
    },
    {
      id: 1,
      name: "Troye",
    },
    {
      id: 2,
      name: "Angus",
    },
    {
      id: 3,
      name: "Clara",
    },
  ]
  return (
    <div>
      <Title label="Hello
      ! World"/>
      <Title label="olá ! Mundo"/>
      <Title label="olá Awari "/>
      <List items= {users}/>
    </div>
  );
}

export default App;
