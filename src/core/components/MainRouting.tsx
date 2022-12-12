import { Routes, Route } from 'react-router-dom'

import Login from './Login';
import Master from './Master';
import Dashboard from '../../components/projects/Dashboard';
import Project from '../../components/projects/Project';
import Tasks from '../../components/Tasks/Tasks';
import Teams from '../../components/projects/Teams';
import AddNewProject from '../../components/projects/newProjectForm/AddNewProject';

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
                <Route path='add-project' element={<AddNewProject />} />
                <Route path='edit-project/:id' element={<AddNewProject />} />
                <Route path=':id/dashboard' element={<Dashboard />} />
                <Route path=':id/tasks' element={<Tasks />} />
                <Route path=':id/teams' element={<Teams />} />
            </Route>
        </Routes>
    )
}

export default MainRouting;