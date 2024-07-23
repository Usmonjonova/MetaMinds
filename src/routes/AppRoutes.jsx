import React, { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import NotFound from '../pages/NotFound/NotFound.jsx';
import LandingPageLayout from '../Layout/LandingLayout.jsx';
import DashboardLayout from '../Layout/DashboardLayout.jsx';

const Home = lazy(() => import('../pages/Home/Home.jsx'));
const Login = lazy(() => import('../pages/Login/Login.jsx'));
const Dashboard = lazy(() => import('../pages/HrDashboard/HrDashboard.jsx'));
const Vacancies = lazy(() => import('../components/hrPanel/Vacancies/Vacancies.jsx'));
const Employees = lazy(() => import('../components/hrPanel/EmployeeList/Employee.jsx'));
const Vacancy = lazy(() => import('../pages/Home/Vacancy.jsx'));

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {/* Public routes without layout */}
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/vacancy/:id" element={<Vacancy />} />
            {/* Routes with layout */}
            <Route element={<LandingPageLayout />}>

            </Route>


            <Route element={<DashboardLayout />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/vacancies" element={<Vacancies />} />
                <Route path="/employees" element={<Employees />} />
            </Route>

            {/* Catch-all route for 404 */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Suspense>
);

export default AppRoutes;
