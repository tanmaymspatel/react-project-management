import { Routes, Route } from 'react-router-dom'
import Login from './Login';

function MainRouting() {
    return (
        <Routes>
            <Route path='/' element={< Login />} />
            <Route path='/login' element={< Login />} />
        </Routes>
    )
}

export default MainRouting;