import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Construction from './Construction';
import Main from './Main';
import SampleBoard from './SampleBoard';
import Welcome from './Welcome';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/construction" component={Construction} />
          <Route path="/sampler" component={SampleBoard} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}
