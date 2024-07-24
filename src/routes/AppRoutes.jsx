import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound.jsx';
import DashboardLayout from '../Layout/DashboardLayout.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Login = lazy(() => import('../pages/Login/Login.jsx'));
const Register = lazy(() => import('../pages/Register/Register.jsx'));
const Dashboard = lazy(() => import('../pages/HrDashboard/HrDashboard.jsx'));
const Vacancies = lazy(() => import('../components/hrPanel/Vacancies/Vacancies.jsx'));
const Candidates = lazy(() => import('../components/hrPanel/EmployeeList/Employee.jsx'));
const Vacancy = lazy(() => import('../pages/Home/Vacancy.jsx'));

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {/* Public routes without layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/vacancy/:id" element={<Vacancy />} />

            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vacancies" element={<Vacancies />} />
                <Route path="/candidates" element={<Candidates />} />
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
