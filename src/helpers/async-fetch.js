import { HttpApiCallError } from './errorHandler';

const asyncFetch = async (url, requestConfig) => {

  const response = await fetch(url, requestConfig);

  const data = await response.json();

  if(!response.ok){

    throw new HttpApiCallError(data.message, data.code);

  }

  return data;

};

export default asyncFetch;
