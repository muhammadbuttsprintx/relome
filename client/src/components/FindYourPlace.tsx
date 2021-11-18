import React from 'react';
import useWindowDimensions from '../helpers/useWindowDimensions';
import FiltersCard from './FiltersCard';
import Results from './Results';

const FindYourPlace = () => {
  const { width } = useWindowDimensions();
  const isMd = () => {
    return width !== null && width > 768;
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="bgAppBlue pb-40">
          <div className="flex justify-center max-h-24">
            <h1 className=" text-white text-5xl font-bold text-center">
              Find Your Place
            </h1>
          </div>
          <div className="flex justify-center mt-4 h-7">
            {isMd() && (
              <hr className="w-20 font-black opacity-100 text-white" />
            )}
          </div>
        </div>
        <div className="page flex flex-col justify-center">
          <FiltersCard />
          <Results />
          <div className="flex justify-center mt-5">
            <button
              className={`bgAppBlue py-2 rounded-md md:border-0 font-medium px-14 text-white text-center justify-center border-2 border-white`}
            >
              Load More Results
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindYourPlace;
