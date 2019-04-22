import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import SurveyIndex from './SurveyIndex/container';

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={SurveyIndex} />
      </Switch>
    </HashRouter>
  )
};

export default Routes;
