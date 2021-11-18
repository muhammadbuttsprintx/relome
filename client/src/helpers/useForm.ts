import { useState } from 'react';

export const useForm = (callback: any, initialState: any) => {
  const [data, setData] = useState(initialState);
  const onChange = (event: any) => {
    setData(() => {
      if (
        event.target.name === 'HomeBudget' ||
        event.target.name === 'HouseholdIncome'
      ) {
        console.log({
          ...data,
          [event.target.name]: parseInt(event.target.value),
        });
        return {
          ...data,
          [event.target.name]: parseInt(event.target.value),
        };
      } else {
        console.log({
          ...data,
          [event.target.name]: event.target.value,
        });
        return {
          ...data,
          [event.target.name]: event.target.value,
        };
      }
    });
  };

  const onSubmit = (event: any) => {
    event && event.preventDefault();
    callback(data);
  };

  return {
    onChange,
    onSubmit,
    data,
    setData,
  };
};
