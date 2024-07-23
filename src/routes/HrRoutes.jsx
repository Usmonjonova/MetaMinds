import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import HrDashboard from '../pages/HrDashboard/HrDashboard.jsx';
// import EmployeeList from '../components/hr/EmployeeList';
// import EmployeeDetails from '../components/hr/EmployeeDetails';
// import PrivateRoute from '../components/PrivateRoute'; 

const HrRoutes = () => {
    return (
        <Switch>
            <Route path="/hr/dashboard" element={<HrDashboard />} />
        </Switch>
    );
};

export default HrRoutes;
