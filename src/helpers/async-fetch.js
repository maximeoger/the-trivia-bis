import { HttpApiCallError } from './errorHandler';

const asyncFetch = async (url, requestConfig) => {

  const response = await fetch(url, requestConfig);

  const data = await response.json();

  if(!response.ok){
    // if the api call doesn't work this will add a new entry to the error stack
    throw new HttpApiCallError(data.message, data.code);
  }

  return data;

};

export default asyncFetch;
