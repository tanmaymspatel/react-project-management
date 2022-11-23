import { Route, Routes } from "react-router-dom";
import Dashboard from "./projects/Dashboard";
import Project from "./projects/Project";
import Tasks from "./projects/Tasks";
import Teams from "./projects/Teams";

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
