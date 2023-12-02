import { Link } from 'react-router-dom';

const PropertyFlash = () => {
  return (
    <div className="flex flex-col mx-auto w-1/2 items-center pt-16">
      <p>Property added successfully</p>
      <div className="flex justify-between w-1/2 mt-12 ">
        <Link to="/new-property" className="text-bold underline font-bold">
          Continue adding property
        </Link>
        <Link to="/dashboard" className="text-bold underline font-bold">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default PropertyFlash;
