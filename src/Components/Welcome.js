import React from 'react';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div id="title">
      <div>WABEY'S WORLD</div>
      <Link to="/main">Enter</Link>
    </div>
  );
}
