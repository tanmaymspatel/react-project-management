import './App.css';
import TaskProvider from './contexts/taskContext/TaskProvider';
import TeamContextProvider from './contexts/teamContext/TeamContextProvider';
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
