import React from 'react';
import { Link } from 'react-router-dom';

export default class Main extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="main-container">
        <div>
          <Link to="/construction">GAMES ROOM</Link>
        </div>
        <div>
          <Link to="/sampler">SAMPLE BOARD</Link>
        </div>
        <div>
          <Link to="/watch">VIDEO ROOM</Link>
        </div>
        <div>
          <Link to="/construction">READING ROOM</Link>
        </div>
      </div>
    );
  }
}
