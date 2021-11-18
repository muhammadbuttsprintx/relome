import React from 'react';
import useWindowDimensions from '../helpers/useWindowDimensions';

const HowItWorks = () => {
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
                How it Works
              </h1>
            </div>
          )}
        </div>
        <div className="page flex justify-center">
          <div className="container bg-white mt-3 md:mt-5 p-5 rounded-lg shadow-md w-11/12">
            <h3 className="font-semibold text-xl">How does this all work?</h3>
            <div className="font-medium text-base">
              <p className="mt-4">
                We’ve worked hard to make it easy to uncover the best place for
                you. This is your chance to check as many boxes and fill in as
                much information as you want… or not!
              </p>
              <p className="mt-4">
                The more you select, the narrower the universe of results. Don’t
                click anything and you’ll search the entire country. Click the
                Southwest and the Northwest and you’ll narrow it down to only
                towns in those two regions. The same goes with Politics and
                Types of Living.
              </p>
              <p className="mt-4">
                Don’t have a budget for your house yet? Leave the Home Budget
                blank and it won’t affect the search. Fill it in and depending
                on if you select 2/3 or 4/5 rooms, RELO will only show towns
                that have an average home price near your budget. For example a
                result with “2/3 - 4/5 Bed Avg: $447k - $856k” means that town’s
                2 to 3 bedroom homes cost $447k on average and its 4 to 5
                bedroom homes cost $856k on average.
              </p>
              <p className="mt-4">
                Have suggestions? Visit our Feedback! tab above and let us know.
              </p>
              <p className="mt-4">
                So click around, try different combinations, and find your best
                place!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
