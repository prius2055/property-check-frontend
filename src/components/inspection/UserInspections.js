import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteInspection,
  getUserInspections,
} from '../../redux/features/inspectionSlice';
import { getCurrentUser } from '../../redux/features/usersSlice';
import { getProperties } from '../../redux/features/propertySlice';

const UserInspections = () => {
  const { inspections, properties, users } = useSelector((store) => store);

  const { inspectionData, isLoading, loadingError } = inspections;

  const { propertyData } = properties;

  const { currentUserData } = users;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserInspections(currentUserData.id));
    dispatch(getCurrentUser());
    dispatch(getProperties());
  }, [dispatch]);

  const deleteInspectionHandler = (id) => {
    const response = dispatch(deleteInspection(id));
    response
      .then((result) => {
        const { status } = result.payload;
        if (status === 'Success') {
          navigate('/my-inspections');
          console.log('successfully deleted');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!currentUserData) {
    navigate('/login');
  }

  if (isLoading) {
    return (
      <div className="m-6">
        <h3>
          <em>loading...</em>
        </h3>
      </div>
    );
  }

  if (loadingError) {
    return (
      <div className="m-6">
        <h3>
          <em>Error loading properties</em>
        </h3>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Navigation />

      <div className="flex flex-col items-center py-8 w-5/6">
        <header className="my-4 font-bold">ALL INSPECTION</header>

        {inspectionData.length !== 0 && (
          <table className="table-auto border border-slate-300 w-3/4">
            <thead>
              <tr className="border border-slate-300 text-left">
                <th className="p-4">Property name</th>
                <th>Location</th>
                <th>Inpection date</th>
                <th>Inspection time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {inspectionData &&
                inspectionData.map((inspection) => (
                  <tr className="border border-slate-300">
                    <td className="p-4">
                      {
                        propertyData?.find(
                          (property) =>
                            property.id === inspection.property_id &&
                            inspection.user_id === currentUserData.id
                        )?.name
                      }
                    </td>
                    <td>
                      {
                        propertyData?.find(
                          (property) => property.id === inspection.property_id
                        )?.location
                      }
                    </td>
                    <td>{inspection.inspection_date}</td>
                    <td>{inspection.inspection_time}</td>
                    <button
                      className="p-4 text-red-600 hover:underline"
                      onClick={() => deleteInspectionHandler(inspection.id)}
                    >
                      Delete
                    </button>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {inspectionData.length === 0 && (
          <p>You hav'nt book for an inspection yet</p>
        )}
      </div>
    </div>
  );
};

export default UserInspections;
