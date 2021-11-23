import React, { useState } from 'react';
import { useForm } from '../helpers/useForm';
import useWindowDimensions from '../helpers/useWindowDimensions';
import { FiltersForm } from '../interfaces/filtersForm';
import ResultsService from '../services/ResultsService';
import FiltersCard from './FiltersCard';
import Results from './Results';

const FindYourPlace = () => {
  const { width } = useWindowDimensions();
  const [loading, setLoading] = useState<boolean>(false);
  const [resData, setResData] = useState<any>([]);
  const [resultsCount, setResultsCount] = useState<number>(0);
  const filtersFormInitial: FiltersForm = {
    ageRange: 'ageThirtyFiveToFiftyFour',
    politics: [],
    regions: [],
    typeOfHome: 'twoByThreeBed',
    homeBudget: '',
    householdIncome: '',
    typesOfLiving: [],
    bestSchools: false,
    page: 1,
  };
  const { data, onChange, onSubmit, setData } = useForm(
    submitCallback,
    filtersFormInitial,
  );

  async function submitCallback() {
    setLoading(true);
    const res = await ResultsService.getFilteredResults(data);
    if (res?.success) {
      if (data.page > 1) {
        setResData((prev: any) => [...prev, ...res.data]);
      } else {
        setResData(res.data);
        setResultsCount(res.resultsCount);
      }
      setLoading(false);
    }
  }

  const isMd = () => {
    return width !== null && width > 768;
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="bgAppBlue pb-28">
          <div className="flex justify-center max-h-24">
            <h1 className=" text-white text-3xl md:text-6xl font-bold text-center">
              Find Your Place
            </h1>
          </div>
          <div className="flex justify-center mt-4 h-7">
            {!isMd() && (
              <hr className="w-20 font-black  opacity-100 text-white" />
            )}
          </div>
        </div>
        <div className="page flex flex-col justify-center">
          <FiltersCard
            onSubmit={onSubmit}
            data={data}
            setData={setData}
            onChange={onChange}
            loading={loading}
          />
          <Results
            resData={resData}
            filterFormData={data}
            resultsCount={resultsCount}
          />
          {resData.length > 1 && (
            <div className="flex justify-center mt-5">
              <button
                className="bgAppBlue py-2 rounded-md md:border-0 font-medium px-14 text-white text-center justify-center border-2 border-white hover:bg-blue-900"
                onClick={() => {
                  setData((prev: FiltersForm) => {
                    return { ...prev, page: prev.page + 1 };
                  });
                  submitCallback();
                }}
              >
                {loading ? (
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                  </div>
                ) : (
                  'Load More Results'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FindYourPlace;
