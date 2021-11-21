import { Dispatch, SetStateAction } from 'react';
import { FiltersForm } from '../interfaces/filtersForm';

export const setPoliticsInput = (
  title: string,
  inputsArr: string[],
  setInputData: Dispatch<SetStateAction<FiltersForm>>,
) => {
  const index = inputsArr.findIndex((item: string) => item === title);
  if (index >= 0) {
    const temp: any = [...inputsArr];
    temp.splice(index, 1);
    setInputData((prev: any) => {
      return {
        ...prev,
        politics: temp,
      };
    });
  } else {
    setInputData((prev: any) => {
      return {
        ...prev,
        politics: [...prev.politics, title],
      };
    });
  }
};

export const setRegionInput = (
  title: string,
  inputsArr: string[],
  setInputData: Dispatch<SetStateAction<FiltersForm>>,
) => {
  const index = inputsArr.findIndex((item: string) => item === title);
  if (index >= 0) {
    const temp: any = [...inputsArr];
    temp.splice(index, 1);
    setInputData((prev: any) => {
      return {
        ...prev,
        regions: temp,
      };
    });
  } else {
    setInputData((prev: any) => {
      return {
        ...prev,
        regions: [...prev.regions, title],
      };
    });
  }
};
export const setTypesOfLivingInput = (
  title: string,
  inputsArr: string[],
  setInputData: Dispatch<SetStateAction<FiltersForm>>,
) => {
  const index = inputsArr.findIndex((item: string) => item === title);
  if (index >= 0) {
    const temp: any = [...inputsArr];
    temp.splice(index, 1);
    setInputData((prev: any) => {
      return {
        ...prev,
        typesOfLiving: temp,
      };
    });
  } else {
    setInputData((prev: any) => {
      return {
        ...prev,
        typesOfLiving: [...prev.typesOfLiving, title],
      };
    });
  }
};
