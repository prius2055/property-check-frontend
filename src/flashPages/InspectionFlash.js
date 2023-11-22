import { Link } from 'react-router-dom';

const InspectionFlash = () => {
  return (
    <div className="flex flex-col mx-auto w-1/2 items-center pt-16">
      <p>You have successfully booked an inspection</p>
      <div className="flex justify-between w-1/2 mt-12 ">
        <Link to="/new-property" className="border-2 border-yellow-500">
          Book more inspections
        </Link>
        <Link to="/dashboard" className="border-2 border-yellow-500">
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default InspectionFlash;
