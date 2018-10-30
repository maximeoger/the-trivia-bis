import React, { Component } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
  }
  

  async componentDidMount() {
    const data = await api.getCategoryById(this.props.match.params.id);
    this.setState({
      category: data,
    });
  }

  render() {
    return (
      <Category
        categoryName={this.props.match.params.id}
        category={this.state.category}
      />
    );
  }
}

export default CategoryContainer;