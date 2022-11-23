import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Master from './Master';
import Dashboard from './projects/Dashboard';
import Project from './projects/Project';
import Tasks from './projects/Tasks';
import Teams from './projects/Teams';

/**
 * @name MainRouting 
 * @returns Main Route of the applications 
 */
function MainRouting() {
    return (
        <Routes>
            <Route path='/' element={< Login />} />
            <Route path='/login' element={< Login />} />
            <Route path=':name/projects/*' element={< Master />} >
                <Route path='' element={<Project />} />
                <Route path=':id/dashboard' element={<Dashboard />} />
                <Route path=':id/tasks' element={<Tasks />} />
                <Route path=':id/teams' element={<Teams />} />
            </Route>
        </Routes>
    )
}

export default MainRouting;