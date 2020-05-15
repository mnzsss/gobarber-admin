import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Forgot from '../pages/ForgotPassword';


import Dashboard from '../pages/Dashboard';
import Staffs from '../pages/Staffs';
import CreateStaff from '../pages/Staffs/create';
import Services from '../pages/Services';

import EditService from '../pages/Services/Form/Edit';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn}/>
    <Route path="/signup" exact component={SignUp}/>
    <Route path="/forgot" exact component={Forgot}/>
    <Route path="/dashboard" exact component={Dashboard} isPrivate/>
    <Route path="/staffs" exact component={Staffs} isPrivate/>
    <Route path="/staffs/new" exact component={CreateStaff} isPrivate/>
    <Route path="/services" exact component={Services} isPrivate/>
    <Route path="/services/:docId/edit" exact component={EditService} isPrivate/>




  </Switch>
);

export default Routes;