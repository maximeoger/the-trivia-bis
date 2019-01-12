import { API_BASE_URL } from './api_base_url';
import asyncFetch from './async-fetch';

class api {

    constructor(){
        this.baseUrl = API_BASE_URL;
    }

  async getQuestionByCategory(categoryId) {
    const response = await fetch(`http://jservice.io/api/clues?category=${categoryId}`);
    const json = await response.json();
    return json;
  }

  async getCategoryById(id) {

    const url = `${this.baseUrl}api/category?id=${id}`;

    const requestConfig = {
      method: 'GET',
      mode: 'cors'
    };
      console.log(requestConfig);
    const parsedData = await asyncFetch(url, requestConfig);


    return parsedData;

  }

  async getAllCategories() {
    const response = await fetch(`http://jservice.io/api/categories?count=100`);
    const json = await response.json();
    return json;
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
