import React from 'react';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../helpers/useWindowDimensions';

const Mission = () => {
  const { width } = useWindowDimensions();
  const isMd = () => {
    return width !== null && width > 768;
  };
  return (
    <>
      <div className="flex flex-col">
        <div className="bgAppBlue pb-40">
          {isMd() && (
            <div className="flex justify-center max-h-24">
              <h1 className=" text-white text-5xl font-bold text-center">
                Mission
              </h1>
            </div>
          )}
        </div>
        <div className="page flex justify-center">
          <div className="container bg-white mt-3 md:mt-5 p-3 md:p-5 rounded-lg shadow-md w-11/12">
            <h3 className="font-semibold text-xl">Mission</h3>
            <div className="font-medium text-base">
              <p className="mt-4">
                Do you really need more data? RELO is about singling out the few
                from the many.
              </p>
              <p className="mt-4">
                Where are the single best places to live in the United States
                based on your needs? That's it.
              </p>
              <p>
                We do the work in the background to make sure you only have to
                consider the things that matter. We're just getting started.
              </p>
              <p className="mt-4">Let's take this journey together.</p>
              <div className="mt-4">
                <Link className="underline " to="/">
                  Find Your Place
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
