import React from 'react';
import { City } from '../interfaces/City';
import { FiltersForm } from '../interfaces/filtersForm';

interface Props {
  resData: City[];
  filterFormData: FiltersForm;
}

const ResultCard = ({ resData, filterFormData }: Props) => {
  const results = [
    {
      postalCode: '01001',
      City: 'Agawam, MA',
      State: 'Massachusetts',
      Region: 'Northeast',
      NeighborhoodType: 'Suburban Yards',
      Diversity: 'Not Very Diverse',
      Politics: 'Liberal',
      ageTwentyTwoToThirtyFour: '14%',
      SearchedAmountOfBeds: '2/3 - 4/5 Bed',
      ageThirtyFiveToFiftyFour: '26%',
      ageFiftyFiveToSeventyFour: '26%',
      twoByThreeToFourByFiveBed: '$272k - $373k',
      twoByThreeBed: '$272,257 ',
      fourByFiveBed: '$372,822 ',
      stateTaxAmount: '$100,000',
      stateTaxPercentage: '32%',
      propertyTaxAmount: '$100,000',
      propertyTaxPercentage: '32%',
      totalTaxAmount: '$100,000',
    },
    {
      postalCode: '01001',
      City: 'Agawam, MA',
      State: 'Massachusetts',
      Region: 'Northeast',
      NeighborhoodType: 'Suburban Yards',
      Diversity: 'Not Very Diverse',
      Politics: 'Liberal',
      ageTwentyTwoToThirtyFour: '14%',
      SearchedAmountOfBeds: '2/3 - 4/5 Bed',
      ageThirtyFiveToFiftyFour: '26%',
      ageFiftyFiveToSeventyFour: '26%',
      twoByThreeToFourByFiveBed: '$272k - $373k',
      twoByThreeBed: '$272,257 ',
      fourByFiveBed: '$372,822 ',
      stateTaxAmount: '$100,000',
      stateTaxPercentage: '32%',
      propertyTaxAmount: '$100,000',
      propertyTaxPercentage: '32%',
      totalTaxAmount: '$100,000',
    },
    {
      postalCode: '01001',
      City: 'Agawam, MA',
      State: 'Massachusetts',
      Region: 'Northeast',
      NeighborhoodType: 'Suburban Yards',
      Diversity: 'Not Very Diverse',
      Politics: 'Liberal',
      ageTwentyTwoToThirtyFour: '14%',
      SearchedAmountOfBeds: '2/3 - 4/5 Bed',
      ageThirtyFiveToFiftyFour: '26%',
      ageFiftyFiveToSeventyFour: '26%',
      twoByThreeToFourByFiveBed: '$272k - $373k',
      twoByThreeBed: '$272,257 ',
      fourByFiveBed: '$372,822 ',
      stateTaxAmount: '$100,000',
      stateTaxPercentage: '32%',
      propertyTaxAmount: '$100,000',
      propertyTaxPercentage: '32%',
      totalTaxAmount: '$100,000',
    },
    {
      postalCode: '01001',
      City: 'Agawam, MA',
      State: 'Massachusetts',
      Region: 'Northeast',
      NeighborhoodType: 'Suburban Yards',
      Diversity: 'Not Very Diverse',
      Politics: 'Liberal',
      ageTwentyTwoToThirtyFour: '14%',
      SearchedAmountOfBeds: '2/3 - 4/5 Bed',
      ageThirtyFiveToFiftyFour: '26%',
      ageFiftyFiveToSeventyFour: '26%',
      twoByThreeToFourByFiveBed: '$272k - $373k',
      twoByThreeBed: '$272,257 ',
      fourByFiveBed: '$372,822 ',
      stateTaxAmount: '$100,000',
      stateTaxPercentage: '32%',
      propertyTaxAmount: '$100,000',
      propertyTaxPercentage: '32%',
      totalTaxAmount: '$100,000',
    },
    {
      postalCode: '01001',
      City: 'Agawam, MA',
      State: 'Massachusetts',
      Region: 'Northeast',
      NeighborhoodType: 'Suburban Yards',
      Diversity: 'Not Very Diverse',
      Politics: 'Liberal',
      ageTwentyTwoToThirtyFour: '14%',
      SearchedAmountOfBeds: '2/3 - 4/5 Bed',
      ageThirtyFiveToFiftyFour: '26%',
      ageFiftyFiveToSeventyFour: '26%',
      twoByThreeToFourByFiveBed: '$272k - $373k',
      twoByThreeBed: '$272,257 ',
      fourByFiveBed: '$372,822 ',
      stateTaxAmount: '$100,000',
      stateTaxPercentage: '32%',
      propertyTaxAmount: '$100,000',
      propertyTaxPercentage: '32%',
      totalTaxAmount: '$100,000',
    },
    {
      postalCode: '01001',
      City: 'Agawam, MA',
      State: 'Massachusetts',
      Region: 'Northeast',
      NeighborhoodType: 'Suburban Yards',
      Diversity: 'Not Very Diverse',
      Politics: 'Liberal',
      ageTwentyTwoToThirtyFour: '14%',
      SearchedAmountOfBeds: '2/3 - 4/5 Bed',
      ageThirtyFiveToFiftyFour: '26%',
      ageFiftyFiveToSeventyFour: '26%',
      twoByThreeToFourByFiveBed: '$272k - $373k',
      twoByThreeBed: '$272,257 ',
      fourByFiveBed: '$372,822 ',
      stateTaxAmount: '$100,000',
      stateTaxPercentage: '32%',
      propertyTaxAmount: '$100,000',
      propertyTaxPercentage: '32%',
      totalTaxAmount: '$100,000',
    },
  ];

  return (
    <>
      {resData[0] &&
        resData.map(
          ({
            ageFiftyFiveToSeventyFour,
            ageThirtyFiveToFiftyFour,
            ageTwentyTwoToThirtyFour,
            postalCode,
            average,
            city,
            diversity,
            neighborhoodType,
            politics,
            propertyTaxAmount,
            propertyTaxPercentage,
            stateTaxPercentage,
            totalStateTax,
            totalTaxAmount,
            noTax,
          }: any) => (
            <>
              <div
                className="flex flex-col rounded-md p-4 bg-white"
                style={{ boxShadow: 'rgb(0 0 0 / 24%) 0px 3px 8px' }}
              >
                <div className="flex text-lg font-bold items-center">
                  <h3 className="mr-3 ">{city}</h3>
                  <svg
                    className="mr-3"
                    width="18"
                    height="18"
                    viewBox="0 0 384 512"
                  >
                    <path
                      fill="#4882b3"
                      d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                    ></path>
                  </svg>
                  <a
                    className="appTextBlue underline"
                    href={`https://www.google.com/maps/search/${postalCode}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {postalCode}
                  </a>
                </div>
                <span className="mt-2 text-sm font-semibold text-gray-500">
                  {neighborhoodType}
                </span>
                <div className="flex font-bold text-sm mt-3">
                  <span className="mr-3">
                    {filterFormData.typeOfHome === 'twoByThreeBed'
                      ? '2/3 BEDS'
                      : filterFormData.typeOfHome === 'fourByFiveBed'
                      ? '4/5 BEDS'
                      : '2/3 BEDS'}
                  </span>
                  <span>Avg: {average}</span>
                </div>
                <div className="grid grid-cols-3 bg-blue-200 rounded-md mt-3">
                  <div
                    className="flex flex-col text-center text-sm font-semibold my-3 px-2"
                    style={{ borderRight: '1px solid white' }}
                  >
                    <span className=" text-gray-500">State Tax</span>
                    <span className="appTextBlue mt-1">
                      {noTax
                        ? '$0'
                        : totalStateTax !== 0
                        ? '$' + totalStateTax.toLocaleString('en-US')
                        : '_'}
                    </span>
                    <span className="appTextBlue mt-1">
                      {/* {stateTaxPercentage !== 0
                        ? stateTaxPercentage + '%'
                        : '_'} */}

                      {noTax
                        ? '0%'
                        : stateTaxPercentage !== 0
                        ? totalStateTax % 1 !== 0
                          ? stateTaxPercentage.toFixed(2) + '%'
                          : stateTaxPercentage + '%'
                        : '_'}
                    </span>
                  </div>
                  <div
                    className="flex flex-col text-center text-sm font-semibold my-3 px-2"
                    style={{ borderRight: '1px solid white' }}
                  >
                    <span className=" text-gray-500">Property Tax</span>
                    <span className="appTextBlue mt-1">
                      {propertyTaxAmount !== 0
                        ? '$' + propertyTaxAmount.toLocaleString('en-US')
                        : '_'}
                    </span>
                    <span className="appTextBlue mt-1">
                      {propertyTaxPercentage !== 0
                        ? propertyTaxPercentage + '%'
                        : '_'}
                    </span>
                  </div>
                  <div className="flex flex-col text-center text-sm font-semibold my-3 px-2">
                    <span className=" text-gray-500">Total Tax</span>
                    <span className="appTextBlue mt-1">
                      {totalTaxAmount !== 0
                        ? '$' + totalTaxAmount.toLocaleString('en-US')
                        : '_'}
                    </span>
                    {/* <span className="appTextBlue mt-1">32%</span> */}
                  </div>
                </div>
                <div className="flex justify-around mt-2">
                  <div className="flex flex-col items-center font-bold text-sm text-center">
                    <span
                      className="pb-2 max-w-min"
                      style={{ borderBottom: '1px solid blue' }}
                    >
                      {ageTwentyTwoToThirtyFour &&
                        ageTwentyTwoToThirtyFour + '%'}
                    </span>
                    <span className="text-gray-400 mt-1">22 - 34 yrs</span>
                  </div>
                  <div className="flex flex-col items-center font-bold text-sm text-center">
                    <span
                      className="pb-2 max-w-min"
                      style={{ borderBottom: '1px solid blue' }}
                    >
                      {ageThirtyFiveToFiftyFour &&
                        ageThirtyFiveToFiftyFour + '%'}
                    </span>
                    <span className="text-gray-400 mt-1">35 - 54 yrs</span>
                  </div>
                  <div className="flex flex-col items-center font-bold text-sm text-center">
                    <span
                      className="pb-2 max-w-min"
                      style={{ borderBottom: '1px solid blue' }}
                    >
                      {ageFiftyFiveToSeventyFour &&
                        ageFiftyFiveToSeventyFour + '%'}
                    </span>
                    <span className="text-gray-400 mt-1">55 - 74 yrs</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <button
                    className=" flex flex-1 bg-white border-2 py-2 rounded-md font-medium px-3 mr-2 justify-center hover:shadow-md text-sm md:text-lg"
                    style={{ color: '#598db8', borderColor: '#4882b3' }}
                  >
                    <span>{diversity}</span>
                  </button>
                  <button className="flex flex-1 bgAppBlue py-2 rounded-md font-medium px-3 text-white text-center justify-center items-center hover:shadow-md hover:bg-blue-900 text-sm md:text-lg">
                    <span>{politics}</span>
                  </button>
                </div>
              </div>
            </>
          ),
        )}
    </>
  );
};

export default ResultCard;
