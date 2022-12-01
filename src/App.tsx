import './App.css';
import UserProvider from './contexts/user-context/UserProvider';
import MainRouting from './core/components/MainRouting';

function App() {

  return (
    <UserProvider >
      <MainRouting />
    </UserProvider>
  );
}

export default App;
