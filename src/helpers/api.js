class api {
  async getCategories() {
      const response = await fetch(`http://jservice.io/api/categories`);
      const json = await response.json();
      return json;
  }
  async getCategoryById(id) {
    const response = await fetch(`http://jservice.io/api/category?id=${id}`);
    const json = await response.json();
    return json;
  }

  saveItem(key, item){
      localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key){
      return JSON.parse(localStorage.getItem(key));
  }
}

export default new api();