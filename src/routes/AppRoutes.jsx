import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound.jsx';
import DashboardLayout from '../Layout/DashboardLayout.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Login = lazy(() => import('../pages/Login/Login.jsx'));
const Register = lazy(() => import('../pages/Register/Register.jsx'));
const Classroom = lazy(() => import('../pages/Classroom/Classroom.jsx'));
const SubjectTitle = lazy(() => import('../pages/Classroom/SubjectContent.jsx'));
const ThemeQuiz = lazy(() => import('../pages/ThemeQuiz/ThemeQuiz.jsx'));
const ThemeQuizCard = lazy(() => import('../components/classroom/ThemeQuizCard.jsx'));

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {/* Public routes without layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />

            {/* Protected routes with layout */}
            <Route path="/" element={<DashboardLayout />}>
                <Route path="/classroom" element={<Classroom />} />
                <Route path="/classroom/:id" element={< SubjectTitle />} />
                <Route path="/matematika/:id" element={< ThemeQuiz />} />
                <Route path="/quizType" element={< ThemeQuizCard />} />
                <Route path="/results" element={< ThemeQuizCard />} />
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
