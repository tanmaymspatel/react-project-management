import './App.css';
import SearchProvider from './contexts/searchContext/SearchProvider';
import TaskProvider from './contexts/taskContext/TaskProvider';
import TeamContextProvider from './contexts/teamContext/TeamContextProvider';
import UserProvider from './contexts/user-context/UserProvider';
import MainRouting from './core/components/MainRouting';

function App() {

  return (
    <UserProvider >
      <TaskProvider>
        <TeamContextProvider>
          <SearchProvider>
            <MainRouting />
          </SearchProvider>
        </TeamContextProvider>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;
