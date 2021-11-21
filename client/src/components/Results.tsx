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
        {/* {resData[0] && ( */}
        <div className="mt-4 text-white">
          <h3 className="font-semibold text-lg  md:text-black ml-4">
            {/* {resData?.length} results found */}
            46 results found
          </h3>
        </div>
        {/* )} */}
        {/* {resData[0] && ( */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mx-3 md:mx0">
          <ResultCard filterFormData={filterFormData} resData={resData} />
        </div>
        {/* )} */}
      </div>
    </>
  );
};

export default Results;
