import { Link } from 'react-router-dom';

const InspectionFlash = () => {
  return (
    <div className="flex flex-col mx-auto w-1/2 items-center pt-16">
      <p>You have successfully booked an inspection</p>
      <div className="flex justify-between w-1/2 mt-12 ">
        <Link to="/my-inspections" className="text-bold underline font-bold">
          See my inspections
        </Link>
        <Link to="/dashboard" className="text-bold underline font-bold">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default InspectionFlash;
