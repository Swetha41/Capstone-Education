import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import PrivateRoute from './auth/PrivateRoutes';
import Dashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoutes';
import AdminDashboard from './user/AdminDashboard';

const Routes = () => {
    return (
    <BrowserRouter>  
        <switch>
            <Route path = "/" exact component={Home}/>
            <Route path = "/signin" exact component={Signin} />
            <Route path = "/signup" exact component={Signup} />
            <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
            <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
        </switch>
    </BrowserRouter>
    );
};

export default Routes;