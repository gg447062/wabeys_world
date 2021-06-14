import React from 'react';
import { Link } from 'react-router-dom';

const Construction = () => {
  return (
    <div id="construction-container">
      <div>Coming Soon...</div>
      <div className="back-button">
        <Link to="/main">back</Link>
      </div>
    </div>
  );
};

export default Construction;
