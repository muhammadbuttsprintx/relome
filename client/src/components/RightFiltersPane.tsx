import React, { Dispatch, SetStateAction, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Definition from './Definition';
import { typesOfHome, typesOfLiving } from '../helpers/mockData';
import { FiltersForm } from '../interfaces/filtersForm';
import { setTypesOfLivingInput } from '../helpers/filtersCardHelper';

interface Props {
  data: any;
  onChange: (event: any) => void;
  setData: Dispatch<SetStateAction<FiltersForm>>;
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
              <div className="flex flex-1 border-1 rounded-md border-blue-500 bg-blue-50 mt-2">
                {typesOfHome.map(({ title, value }, index) => (
                  <button
                    key={uuidv4()}
                    className={`flex-1 py-2 m-0.5 font-medium appBlue hover:bg-blue-900 rounded-md ${
                      btnActive === index && 'text-white  bgAppBlue'
                    }`}
                    onClick={() => {
                      setBtnActive(index);
                      setData((prevData: FiltersForm) => {
                        console.log({ ...prevData, typeOfHome: value });
                        return { ...prevData, typeOfHome: value };
                      });
                    }}
                  >
                    {title}
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
                className="bg-blue-50 border-0 overflow-hidden placeholder-blue-400 placeholder text-blue-500"
                type="number"
                name="homeBudget"
                value={data.HomeBudget}
                onChange={onChange}
                placeholder="10,000.00"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:text-black">
          <div>
            <div className="flex">
              <h5 className="text-sm font-semibold">Types of Living</h5>
              <div className="text-white flex items-end">
                <span
                  className=" md:text-blue-500 ml-4 text-sm underline font-medium cursor-pointer"
                  onClick={() => {
                    setShowDef((prev) => !prev);
                  }}
                >
                  Definition
                </span>
              </div>

              <Definition showDef={showDef} setShowDef={setShowDef} />
            </div>
            {typesOfLiving.map(({ name, title }) => (
              <div
                className="flex flex-1 p-2"
                onClick={() => {
                  setTypesOfLivingInput(title, data.typesOfLiving, setData);
                }}
                key={uuidv4()}
              >
                <input
                  className="mr-4 mt-1 hover:bg-indigo-200 hover:shadow-md "
                  type="checkbox"
                  name={name}
                  value={data[name]}
                  checked={data[name]}
                  onChange={(e: any) =>
                    setData((prev: any) => {
                      console.log({
                        ...prev,
                        [e.target.name]: !prev[name],
                      });

                      return {
                        ...prev,
                        [e.target.name]: !prev[name],
                      };
                    })
                  }
                />
                <label className="font-medium">{title}</label>
              </div>
            ))}
          </div>
          <div>
            <h5 className="text-sm font-semibold">Household Income</h5>
            <div className="flex items-center bg-blue-50 mt-2 w-40">
              <img className="max-h-4 ml-5" src="/$.png" alt="" />
              <input
                className="bg-blue-50 border-0 overflow-hidden placeholder-blue-400 text-blue-500"
                type="number"
                name="householdIncome"
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
