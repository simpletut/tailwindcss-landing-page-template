import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPageLayout from './layouts/LandingPage';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Switch>
      <Route path="/">
        <LandingPageLayout heading="Tailwind CSS">
          <Homepage />
        </LandingPageLayout>
      </Route>
    </Switch>
  );
}

export default App;
