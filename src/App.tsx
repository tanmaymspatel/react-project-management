import './App.css';
import TaskProvider from './contexts/user-context/TaskProvider';
import UserProvider from './contexts/user-context/UserProvider';
import MainRouting from './core/components/MainRouting';

function App() {

  return (
    <UserProvider >
      <TaskProvider>
        <MainRouting />
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
