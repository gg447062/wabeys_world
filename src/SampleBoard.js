import React from 'react';
import { Link } from 'react-router-dom';
import SampleGrid from './SampleGrid';

export default class SampleBoard extends React.Component {
  render() {
    return (
      <div id="sampler-container">
        <div id="sampler-header">Sample Board</div>
        <SampleGrid />
        <div className="back-button">
          <Link to="/main">back</Link>
        </div>
      </div>
    );
  }
}
