import React, { Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setPoliticsInput, setRegionInput } from '../helpers/filtersCardHelper';
import { FiltersForm } from '../interfaces/filtersForm';

interface Props {
  data: any;
  onChange: (event: any) => void;
  setData: Dispatch<SetStateAction<FiltersForm>>;
}

const LeftFiltersPane = ({ onChange, data, setData }: Props) => {
  const ageRange = [
    { title: '22 - 34', value: 'ageTwentyTwoToThirtyFour' },
    { title: '35 - 54', value: 'ageThirtyFiveToFiftyFour' },
    { title: '55 - 74', value: 'ageFiftyFiveToSeventyFour' },
  ];
  const politics: string[] = ['Conservative', 'Moderate', 'Liberal'];
  const region = [
    'Northwest',
    'Southwest',
    'Mid-Atlantic',
    'California',
    'Midwest',
    'South',
    'Rockies',
    'Northeast',
    'Florida',
  ];

  const [btnActive, setBtnActive] = useState(1);

  return (
    <>
      <div className=" text-white">
        <div className="md:text-black">
          <h5 className="text-sm font-semibold">Age Range*</h5>
          <div className="flex border-1 rounded-md border-blue-500 bg-blue-50 mt-2">
            {ageRange.map(({ title, value }, index) => (
              <button
                key={uuidv4()}
                className={`flex-1 m-0.5 font-medium appBlue hover:bg-blue-900 rounded-md py-2 ${
                  btnActive === index && 'text-white bgAppBlue'
                }`}
                name="ageRange"
                onClick={() => {
                  setBtnActive(index);
                  setData((prevData: FiltersForm) => {
                    console.log({ ...prevData, ageRange: value });
                    return { ...prevData, ageRange: value };
                  });
                }}
              >
                {title}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-semibold mb-2">Politics</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {politics.map((title) => (
                <div
                  className="flex flex-1 px-2 items-center"
                  onClick={() => {
                    setPoliticsInput(title, data.politics, setData);
                  }}
                  key={uuidv4()}
                >
                  <input
                    className="mr-4 hover:bg-indigo-200 hover:shadow-md"
                    name={title}
                    checked={data.politics.includes(title)}
                    type="checkbox"
                  />
                  <label className="font-medium">{title}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h5 className="text-sm font-semibold mb-2">Region</h5>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {region.map((regionEl) => (
                <div
                  className="flex flex-1 px-2 items-center"
                  onClick={() => {
                    setRegionInput(regionEl, data.regions, setData);
                  }}
                  key={uuidv4()}
                >
                  <input
                    className="mr-4 hover:bg-indigo-200 hover:shadow-md"
                    type="checkbox"
                    name={regionEl}
                    checked={data.regions.includes(regionEl)}
                    // onChange={(e: any) =>
                    //   setData((prev: any) => {
                    //     return {
                    //       ...prev,
                    //       [e.target.name]: !prev[regionEl],
                    //     };
                    //   })
                    // }
                  />
                  <label className="font-medium">{regionEl}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftFiltersPane;
