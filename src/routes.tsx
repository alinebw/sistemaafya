import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/pages/Home';
import Login from './views/pages/Login';
import SignUP from './views/pages/SignUp';

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
        <Switch>kite
          <Route path="/" exact compenent={Home}/>
          <Route path="/login" compenent={Login}/>
          <Route path="/criar-conta" compenent={SignUp}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;