import React from 'react';
import { useForm } from '../helpers/useForm';
import useWindowDimensions from '../helpers/useWindowDimensions';
import { FiltersFormInitial } from '../interfaces/filtersFormInitial';
import LeftFiltersPane from './LeftFiltersPane';
import RightFiltersPane from './RightFiltersPane';
const FiltersCard = () => {
  const { width } = useWindowDimensions();
  const filtersFormInitial: FiltersFormInitial = {
    AgeRange: '35-54',
    // politics
    Conservativ: false,
    Moderate: false,
    Liberal: false,
    // regions
    Northwest: false,
    Southwest: false,
    'Mid-Atlantic': false,
    California: false,
    Midwest: false,
    South: false,
    Rockies: false,
    Northeast: false,
    Florida: false,

    TypeOfHome: '2/3 BEDS',
    HomeBudget: '',
    HouseholdIncome: '',
    // typesOfLiving
    'Big City Apartments': false,
    'Urban Apartments / Homes': false,
    'Small Lawn Neighborhoods': false,
    'Suburban Yards': false,
    bestSchools: false,
  };
  const { data, onChange, onSubmit, setData } = useForm(
    submitCallback,
    filtersFormInitial,
  );

  async function submitCallback() {}

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
                onChange={onChange}
                id="toggle-example"
                className="sr-only"
              />
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
          </div>
        </div>
        <hr className="font-bold my-3" />
        <div className="flex md:justify-start">
          <button
            className="bgAppBlue border-2 border-white py-2 w-full md:w-40 text-base font-medium text-white rounded-md"
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
