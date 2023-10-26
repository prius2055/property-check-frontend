import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-1/4 py-4 px-4">
      <h1>propInspect</h1>
      <ul>
        <li>Properties</li>
        <li>My appointments</li>
        <li>Book appointment</li>
        <li>Add property</li>
        <li>Remove property</li>
      </ul>
      <button>Logout</button>
      <div>
        <div>
          <FontAwesomeIcon icon={faXTwitter} style={{ color: '#000000' }} />
        </div>
        <button>copyright</button>
      </div>
    </div>
  );
};

export default Navigation;
