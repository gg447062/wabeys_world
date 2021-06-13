import React from 'react';
import SamplePad from './SamplePad';
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class SampleGrid extends React.Component {
  render() {
    return (
      <div id="pad-grid">
        {list.map((item) => (
          <SamplePad id={item} key={item} />
        ))}
      </div>
    );
  }
}
