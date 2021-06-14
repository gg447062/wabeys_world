import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Construction from './Components/Construction';
import Main from './Components/Main';
import SampleBoard from './Components/SampleBoard';
import VideoRoom from './Components/VideoRoom';
import Welcome from './Components/Welcome';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/construction" component={Construction} />
          <Route path="/sampler" component={SampleBoard} />
          <Route path="/watch" component={VideoRoom} />
          <Route path="/main" component={Main} />
        </Switch>
      </div>
    );
  }
}
