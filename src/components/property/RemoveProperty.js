import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getInspections } from '../../redux/features/inspectionSlice';
import { getAllUsers, getCurrentUser } from '../../redux/features/usersSlice';
import { getProperties } from '../../redux/features/propertySlice';
import { deleteProperty } from '../../redux/features/propertySlice';

// import Login from './auth/Login';

const RemoveProperty = () => {
  const { inspections, properties, users } = useSelector((store) => store);

  const { propertyData, isLoading, loadingError } = properties;

  const { inspectionData } = inspections;

  const { currentUserData } = users;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProperties());
    dispatch(getCurrentUser());
    dispatch(getInspections());
  }, [dispatch]);

  const handleDelete = (id) => {
    const response = dispatch(deleteProperty(id));
    console.log(id);

    response
      .then((result) => {
        const { status } = result.payload;
        if (status === 'Success') {
          navigate('/delete-property');
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
        <header className="my-4 font-bold">ALL PROPERTIES</header>

        {propertyData.length !== 0 && (
          <table className="table-auto border border-slate-300 w-3/4">
            <thead>
              <tr className="border border-slate-300 text-left">
                <th className="p-4">Property name</th>
                <th>Property type</th>
                <th>Location</th>
                <th>Price</th>
                <th>Date posted</th>
                <th>No. of Inspections</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {propertyData &&
                propertyData.map((property) => (
                  <tr className="border border-slate-300">
                    <td className="p-4">{property.name}</td>
                    <td>{property.house_type}</td>
                    <td>{property.location}</td>
                    <td>{`$${property.price}M`}</td>
                    <td>{`${new Date(
                      `${property.created_at}`
                    ).toLocaleDateString('en-GB')}`}</td>
                    <td className="text-center">
                      {inspectionData &&
                        inspectionData.filter(
                          (inspection) => inspection.property_id === property.id
                        )?.length}
                    </td>

                    <button
                      className="p-4 text-red-600 hover:underline"
                      onClick={() => {
                        handleDelete(property.id);
                      }}
                    >
                      Delete
                    </button>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
        {propertyData.length === 0 && (
          <p>No property to display</p>
        )}
      </div>
    </div>
  );
};

export default RemoveProperty;
