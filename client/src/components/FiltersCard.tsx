import React from 'react';
import useWindowDimensions from '../helpers/useWindowDimensions';
import LeftFiltersPane from './LeftFiltersPane';
import RightFiltersPane from './RightFiltersPane';

const FiltersCard = ({ onSubmit, data, setData, onChange }: any) => {
  const { width } = useWindowDimensions();

  return (
    <form onSubmit={onSubmit}>
      <div className="container bgAppBlue md:bg-white mt-3 md:mt-5 p-5 md:rounded-lg md:shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          <LeftFiltersPane data={data} setData={setData} onChange={onChange} />
          <RightFiltersPane data={data} setData={setData} onChange={onChange} />
        </div>
        <hr className="font-bold my-3" />
        <div className="flex">
          <img
            src={
              width !== null && width > 768
                ? 'https://relome.io/static/media/Great-school.91c8f35a.svg'
                : 'https://relome.io/static/media/Great-school-White.a57381e0.svg'
            }
            alt=""
            width="46px"
          />
          <div className="flex pl-5 mt-6 text-white">
            <span className="mr-5 md:text-black text-md font-medium">
              Only the Best Schools
            </span>
            <label className="flex items-center cursor-pointer relative mb-4">
              <input
                type="checkbox"
                name="bestSchools"
                value={data.bestSchools}
                // onChange={onChange}
                checked={data.bestSchools}
                onChange={(e: any) =>
                  setData((prev: any) => {
                    return {
                      ...prev,
                      [e.target.name]: !prev.bestSchools,
                    };
                  })
                }
                id="toggle-example"
                className="sr-only hover:bg-indigo-200 hover:shadow-md"
              />
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
          </div>
        </div>
        <hr className="font-bold my-3" />
        <div className="flex md:justify-start">
          <button
            className="bgAppBlue border-2 border-white py-2 w-full md:w-40 text-base font-medium text-white rounded-md hover:bg-blue-900"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default FiltersCard;
