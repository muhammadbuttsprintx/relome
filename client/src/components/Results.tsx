import React from 'react';
import ResultCard from './ResultCard';

const Results = () => {
  return (
    <>
      <div className="container">
        <div className="mt-4">
          <h3 className="font-medium">46 results found</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
          <ResultCard />
        </div>
      </div>
    </>
  );
};

export default Results;
