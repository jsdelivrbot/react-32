import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Roster from './Roster';

const Main = () => {
  <main>
    <Switch>
      <Route path='/roster' component={Roster}/>
    </Switch>
  </main>
}

export default Main;