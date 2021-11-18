import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from './FindYourPlace';
import Feedback from './Feedback';
import HowItWorks from './HowItWorks';
import Mission from './Mission';

const Routes = () => {
  return (
    <>
      <div className="min-h-screen">
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/mission" exact>
            <Mission />
          </Route>
          <Route path="/howitworks" exact>
            <HowItWorks />
          </Route>
          <Route path="/feedback" exact>
            <Feedback />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default Routes;
