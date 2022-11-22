import { Routes, Route } from 'react-router-dom'
import Login from './Login';
import Master from './Master';

/**
 * @name MainRouting 
 * @returns Main Route of the applications 
 */
function MainRouting() {
    return (
        <Routes>
            <Route path='/' element={< Login />} />
            <Route path='/login' element={< Login />} />
            <Route path='/projects' element={< Master />} />
        </Routes>
    )
}

export default MainRouting;