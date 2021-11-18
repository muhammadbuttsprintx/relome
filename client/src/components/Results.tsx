import React, { useEffect } from 'react';
import { FiltersForm } from '../interfaces/filtersForm';
import ResultCard from './ResultCard';

interface Props {
  resData: any;
  filterFormData: FiltersForm;
}

const Results = ({ resData, filterFormData }: Props) => {
  return (
    <>
      <div className="container p-0 mt-3">
        {console.log(resData?.length)}
        {resData[0] && (
          <div className="mt-4">
            <h3 className="font-semibold text-lg">
              {resData?.length} results found
            </h3>
          </div>
        )}
        {resData[0] && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
            <ResultCard filterFormData={filterFormData} resData={resData} />
          </div>
        )}
      </div>
    </>
  );
};

export default Results;
