import { Route, Routes } from "react-router-dom";
import Dashboard from "../../components/projects/Dashboard";
import Project from "../../components/projects/Project";
import Tasks from "../../components/Tasks/Tasks";
import Teams from "../../components/projects/Teams";

export default function ProjectRouting() {
    return (
        <Routes>
            <Route path='projects' element={<Project />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='tasks' element={<Tasks />} />
            <Route path='teams' element={<Teams />} />
        </Routes>
    )
}
