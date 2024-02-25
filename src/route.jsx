

import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginAlumni from './pages/LoginAlumni';
import LoginPage from './pages/LoginPage';
import LoginStudent from './pages/LoginStudent';
import RegisterAlumni from './pages/RegisterAlumni';
import RegisterPage from './pages/RegisterPage';
import RegisterStudent from './pages/RegisterStudent';
import HomeAlumni from './pages/HomeAlumni';
import HomeStudent from './pages/HomeStudent';
import VideoRoom from './pages/VideoRoom';
import GroupRoom from './pages/GroupRoom';

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/login', element: <LoginPage />},
    {path: '/register', element: <RegisterPage />},
    {path: '/alumniLogin', element: <LoginAlumni />},
    {path: '/studentLogin', element: <LoginStudent />},
    {path: '/alumniRegister', element: <RegisterAlumni />},
    {path: '/studentRegister', element: <RegisterStudent />},
    {path: '/alumniHome', element: <HomeAlumni />},
    {path: '/studentHome', element: <HomeStudent />},
    {path: '/videoRoom', element: <VideoRoom />},
    {path: '/room/:roomID', element: <GroupRoom />},
])

export default router;