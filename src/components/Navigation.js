import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faPinterestP } from '@fortawesome/free-brands-svg-icons';

const Navigation = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-1/7 py-4 pl-4 border-2">
      <div className="flex flex-col font-bold">
        <h1 className="p-4">propInspect</h1>

        <ul className="mt-20 flex flex-col justify-between h-80 uppercase cursor-pointer ">
          <li className="p-4 hover:bg-lime-500">Properties</li>
          <li className="p-4 hover:bg-lime-500">My inspections</li>
          <li className="p-4 hover:bg-lime-500">Book inspection</li>
          <li className="p-4 hover:bg-lime-500">Add property</li>
          <li className="p-4 hover:bg-lime-500">Remove property</li>
          <li className="p-4 hover:bg-lime-500">Logout out</li>
        </ul>
      </div>

      <div className="flex flex-col justify-start ">
        <div className="flex justify-between mb-4 mr-20">
          <FontAwesomeIcon icon={faXTwitter} style={{ color: '#000000' }} />
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faGooglePlusG} />
          <FontAwesomeIcon icon={faVimeoV} />
          <FontAwesomeIcon icon={faPinterestP} />
        </div>
        <footer className="text-sm">&copy; 2023 PropInspect</footer>
      </div>
    </div>
  );
};

export default Navigation;
