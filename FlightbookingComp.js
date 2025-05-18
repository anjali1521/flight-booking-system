import React from 'react';

export const FlightbookingComp = () => {
  return (
    <div className='bg-white w-[45%] rounded-xl shadow-sm ml-60'>
      {/* Heading */}
      <div className='p-2'>
        <p className='font-semibold ml-10 text-sm '>
          Book Cheap  <span className='text-yellow-400'> Flights</span>
        </p>
      </div>

      {/* One Way / Round Way */}
      <div className='flex bg-black text-white justify-center py-1'>
        <div className='flex'>
          <input
            className='text-white'
            type='radio'
            id='oneway'
            name='trip'
            value='oneway'
          />
          <p className='text-xs ml-1'>One Way</p>
        </div>
        <div className='flex ml-2'>
          <input
            className='text-white'
            type='radio'
            id='roundway'
            name='trip'
            value='roundway'
          />
          <p className='text-xs'>Round Way</p>
        </div>
      </div>

      {/* Form Inputs */}
      <div className='p-4 space-y-1.5'>
        {/* Departure */}
        <div>
          <label className='block font-medium mb-1 text-xs' htmlFor='departure'>
            Departure:
          </label>
          <input
            id='departure'
            type='text'
            placeholder='City'
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>

        {/* Destination */}
        <div>
          <label
            className='block font-medium mb-1 text-xs'
            htmlFor='destination'
          >
            Destination:
          </label>
          <input
            id='destination'
            type='text'
            placeholder='City'
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>

        {/* Passengers */}
        <div>
          <label
            className='block font-medium mb-1 text-xs'
            htmlFor='passengers'
          >
            Passengers:
          </label>
          <input
            id='passengers'
            type='number'
            placeholder='Count'
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>

        {/* Calendar */}
        <div>
          <label className='block font-medium mb-1 text-xs' htmlFor='calendar'>
            Date:
          </label>
          <input
            id='calendar'
            type='date'
            className='w-full p-1 border rounded text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400'
          />
        </div>
      </div>

      {/* Find Flight Button */}
      <div className='p-2'>
        <button className='w-full bg-yellow-400 text-white font-medium py-1.5 text-xs rounded hover:bg-yellow-500 transition'>
          Find Flights
        </button>
      </div>
    </div>
  );
};
