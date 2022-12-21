import './App.css';
import TaskProvider from './contexts/user-context/TaskProvider';
import TeamContextProvider from './contexts/user-context/TeamContextProvider';
import UserProvider from './contexts/user-context/UserProvider';
import MainRouting from './core/components/MainRouting';

function App() {

  return (
    <UserProvider >
      <TaskProvider>
        <TeamContextProvider>
          <MainRouting />
        </TeamContextProvider>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
