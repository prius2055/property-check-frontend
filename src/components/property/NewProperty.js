import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProperty } from '../../redux/features/propertySlice';
import Navigation from '../Navigation';
import { getCurrentUser } from '../../redux/features/usersSlice';

function NewProperty() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUserData } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  if (!currentUserData.username) {
    navigate('/login');
  }

  const newPropertyObj = {
    name: '',
    house_type: '',
    location: '',
    price: '',
    image: '',
    description: '',
  };

  const [newProperty, setnewProperty] = useState(newPropertyObj);

  const handleChange = (event) => {
    setnewProperty({
      ...newProperty,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const response = dispatch(addProperty(newProperty));

    response
      .then((result) => {
        const { status } = result.payload;
        if (status === 'Success') {
          navigate('/property-flash');
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setnewProperty({
      name: '',
      house: '',
      location: '',
      price: '',
      image: '',
      description: '',
    });
  };

  return (
    <div className="h-full w-full flex">
      <Navigation />
      <form
        onSubmit={handleSubmit}
        className="mx-auto py-20 border-2 border-yellow-500 flex flex-col w-1/2 rounded-md"
      >
        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="text"
          name="name"
          placeholder="Enter the name of the property"
          required
          value={newProperty.name}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="text"
          name="house_type"
          placeholder="Enter the house type here"
          required
          value={newProperty.house_type}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="text"
          name="location"
          placeholder="Enter the location of the property"
          required
          value={newProperty.location}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="number"
          name="price"
          placeholder="Enter the price of the property"
          required
          value={newProperty.price}
          onChange={handleChange}
        />

        <input
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto my-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          type="text"
          name="image"
          placeholder="Enter a link to of the property's image"
          required
          value={newProperty.image}
          onChange={handleChange}
        />

        <textarea
          className="w-3/4 rounded-md border-0 py-1.5 pl-5 pr-20 mx-auto mt-4 mb-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-500 focus:outline-0 sm:text-sm sm:leading-6"
          name="description"
          cols="5"
          rows="8"
          placeholder="A brief description of the property"
          required
          value={newProperty.description}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="w-2/4 rounded-md bg-lime-600 px-3 py-2 mx-auto text-sm font-semibold text-white shadow-sm hover:bg-lime-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewProperty;
