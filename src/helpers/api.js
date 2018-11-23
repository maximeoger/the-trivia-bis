class api {
  async getQuestionByCategory(categoryId) {
    const response = await fetch(`http://jservice.io/api/clues?category=${categoryId}`);
    const json = await response.json();
    return json;
  }

  async getCategoryById(id) {
    const response = await fetch(`http://jservice.io/api/category?id=${id}`);
    const json = await response.json();
    return json;
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