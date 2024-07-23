import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import UserDashboard from '../pages/UserDashboard/UserDashboard.jsx';
// import UserProfile from '../components/user/UserProfile';
// import AccountSettings from '../components/user/AccountSettings';
// import PrivateRoute from '../components/PrivateRoute';

const UserRoutes = () => {
    return (
        <Switch>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            {/* <PrivateRoute path="/user/profile" component={UserProfile} />
            <PrivateRoute path="/user/settings" component={AccountSettings} /> */}
        </Switch>
    );
};

export default UserRoutes;
