import './App.css';
import ListUsers from './components/ListUsers';
import Title from './components/Title';
import { useUser } from './hooks/useUser';

function App() {
  const { users } = useUser();

  return (
    <>
      <Title />
      <ListUsers users={users} />
    </>
  );
}

export default App;
