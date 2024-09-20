import React, { useContext, useEffect } from 'react'
import { GlobalState } from '../../State/State'
// import UserEvent from '../../Profiles/UserEvent'
import { useState } from 'react'
import Banner from '../utils/Banner'
import useFetch from '../../hooks/usefetch'
import Recipient from './Recipient'
import LoadingSpinner from '../utils/Spinner'

const Recipients = () => {
  const [search, setSearch] = useState("");
  const API = `/users-register/users/?search=${search}`;
  const { isLoading, error, data } = useFetch(API);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  if (isLoading) {
    return <LoadingSpinner />
  }
  return (
    <>
      <Banner path={"Recipients Lists"} /> {/* Assume you have a Banner component */}

      <div className='py-10 md:py-20 bg-gray-200'>
        <div className="wrap w-full md:w-[70%] m-auto">
          <select required onChange={handleChange} name="bloodGroup" className='w-full py-4 px-5 border rounded-sm'>
            <option value="">Select Your Blood Group</option>
            <option value="A+">A+</option>
            <option value="B+">B+</option>
            <option value="AB+">AB+</option>
            <option value="O+">O+</option>
            <option value="A-">A-</option>
            <option value="B-">B-</option>
            <option value="AB-">AB-</option>
            <option value="O-">O-</option>
          </select>
        </div>

        <div className="wrap py-10 flex justify-center flex-wrap gap-10">
          {error ? (
            <h1 className='text-red-500 text-3xl text-center my-4'>{error}</h1>
          ) : data && data.length > 0 ? (
            data.map((recipient, index) => (
              <Recipient key={index} recipient={recipient} />
            ))
          ) : (
            <h1 className='text-red-500 text-3xl text-center my-4'>There is no Request! 😔</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Recipients