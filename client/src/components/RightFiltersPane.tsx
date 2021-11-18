import React, { Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Definition from './Definition';
import { typesOfHome, typesOfLiving } from '../helpers/mockData';
import { FiltersFormInitial } from '../interfaces/filtersFormInitial';

interface Props {
  data: any;
  onChange: (event: any) => void;
  setData: Dispatch<SetStateAction<FiltersFormInitial>>;
}

const RightFiltersPane = ({ data, onChange, setData }: Props) => {
  const [btnActive, setBtnActive] = useState(0);
  const [showDef, setShowDef] = useState(false);

  return (
    <>
      <div className="text-white">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:text-black">
          <div>
            <h5 className="text-sm font-semibold">Type of Home</h5>
            <div className="flex justify-between">
              <div className="flex flex-1 border-1 rounded-sm border-blue-500 bg-blue-50 mt-2">
                {typesOfHome.map((typesOfHomeEl, index) => (
                  <button
                    key={uuidv4()}
                    className={`flex-1 py-1 m-0.5 font-medium appBlue  ${
                      btnActive === index && 'text-white rounded-sm bgAppBlue'
                    }`}
                    name={typesOfHomeEl}
                    value={data[typesOfHomeEl]}
                    onClick={() => {
                      setBtnActive(index);
                      setData((prevData: FiltersFormInitial) => {
                        console.log({ ...prevData, TypeOfHome: typesOfHomeEl });
                        return { ...prevData, TypeOfHome: typesOfHomeEl };
                      });
                    }}
                  >
                    {typesOfHomeEl}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Home Budget</h5>
            <div className="flex items-center bg-blue-50 mt-2 w-40">
              <img className="max-h-4 ml-5" src="/$.png" alt="" />
              <input
                className="bg-blue-50 border-0 overflow-hidden"
                type="number"
                name="HomeBudget"
                value={data.HomeBudget}
                onChange={onChange}
                placeholder="10,000.00"
                required
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:text-black">
          <div>
            <div className="flex">
              <h5 className="text-sm font-semibold">Types of Living</h5>
              <span
                className="text-white md:text-blue-500 ml-4 text-sm underline font-medium cursor-pointer"
                onClick={() => {
                  setShowDef((prev) => !prev);
                }}
              >
                Definition
              </span>

              <Definition showDef={showDef} setShowDef={setShowDef} />
            </div>
            {typesOfLiving.map((typesOfLivingEl) => (
              <div className="flex flex-1 p-2" key={uuidv4()}>
                <input
                  className="mr-4 mt-1"
                  type="checkbox"
                  name={typesOfLivingEl}
                  value={data[typesOfLivingEl]}
                  checked={data[typesOfLivingEl]}
                  onChange={(e: any) =>
                    setData((prev: any) => {
                      console.log({
                        ...prev,
                        [e.target.name]: !prev[typesOfLivingEl],
                      });

                      return {
                        ...prev,
                        [e.target.name]: !prev[typesOfLivingEl],
                      };
                    })
                  }
                />
                <label className="font-medium">{typesOfLivingEl}</label>
              </div>
            ))}
          </div>
          <div>
            <h5 className="text-sm font-semibold">Household Income</h5>
            <div className="flex items-center bg-blue-50 mt-2 w-40">
              <img className="max-h-4 ml-5" src="/$.png" alt="" />
              <input
                className="bg-blue-50 border-0 overflow-hidden"
                type="number"
                name="HouseholdIncome"
                value={data.HouseholdIncome}
                onChange={onChange}
                placeholder="10,000.00"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RightFiltersPane;
