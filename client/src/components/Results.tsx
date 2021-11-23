import useWindowDimensions from '../helpers/useWindowDimensions';
import { FiltersForm } from '../interfaces/filtersForm';
import ResultCard from './ResultCard';

interface Props {
  resData: any;
  filterFormData: FiltersForm;
  resultsCount: number;
  isSearched: boolean;
}

const Results = ({
  resData,
  filterFormData,
  resultsCount,
  isSearched,
}: Props) => {
  const { width } = useWindowDimensions();
  return (
    <>
      {resData[0] && (
        <div className="container p-0 mt-3">
          {resultsCount && (
            <div className="mt-4 text-white">
              <h3 className="font-semibold text-lg  md:text-black ml-4">
                {resultsCount} results found
              </h3>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 mx-3 md:mx0">
            <ResultCard filterFormData={filterFormData} resData={resData} />
          </div>
        </div>
      )}
      {isSearched && resultsCount === 0 && (
        <div className="flex flex-col items-center mt-5 sideBarTextBlue">
          <img
            src={
              width && width < 768
                ? '/info_black_25dp.svg'
                : '/info_black_24dp.svg'
            }
            width="40px"
            height="40px"
            alt="icon"
          />
          <span
            className={`w-80 text-center text-2xl font-semibold mt-4 ${
              width && width < 768 && 'text-white'
            }`}
          >
            There were no results for the combination you searched. Try
            something new!
          </span>
        </div>
      )}
    </>
  );
};

export default Results;
