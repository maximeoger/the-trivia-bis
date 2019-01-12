import { API_BASE_URL } from './api_base_url';
import asyncFetch from './async-fetch';

class api {
  constructor(){
    this.baseUrl = API_BASE_URL;
  }

  async getCategories() {
    
    const url = `${this.baseUrl}api/categories?count=100`;

    const requestConfig = {
      method: 'GET',
      mode: 'cors'
    }

    const parsedData = await asyncFetch(url, requestConfig);

    return parsedData
  }

  async getCategoryById(id) {

    const url = `${this.baseUrl}api/category?id=${id}`;

    const requestConfig = {
      method: 'GET',
      mode: 'cors'
    }
    
    const parsedData = await asyncFetch(url, requestConfig);

    return parsedData;
  
  }
}

export default new api();