import { API_BASE_URL } from './api_base_url';
import asyncFetch from './async-fetch';

class api {

  constructor(){

    this.baseUrl = API_BASE_URL;
    
  }

  async getQuestionByCategory(categoryId) {

    const url = `${this.baseUrl}api/clues?category=${categoryId}`;

    const requestConfig = {
      method: 'GET',
      mode: 'cors'
    };

    const parsedData = await asyncFetch(url, requestConfig);

    return parsedData;

  }

  async getCategoryById(id) {

    const url = `${this.baseUrl}api/category?id=${id}`;

    const requestConfig = {
      method: 'GET',
      mode: 'cors'
    };

    const parsedData = await asyncFetch(url, requestConfig);

    return parsedData;

  }

  async getAllCategories(count) {

    const url = `${this.baseUrl}api/categories?count=${count}`;

    const requestConfig = {
      method: 'GET',
      mode: 'cors'
    };

    const parsedData = await asyncFetch(url, requestConfig);

    return parsedData;
  }

  saveItem(key, item) {

    localStorage.setItem(key, JSON.stringify(item));

  }

  getItem(key) {

    let storage = localStorage.getItem(key);

    return storage ? JSON.parse(storage) : [];

  }
}

export default new api();
