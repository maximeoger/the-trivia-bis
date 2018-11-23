import React, { Component } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    questions: []
  }
  async componentWillMount() {
    const data = api.getCategoryById(this.props.match.params.id);
    const datas = api.getQuestionByCategory(this.props.match.params.id).then(questions =>
      this.setState({
        category: data,
        questions: questions,
      }),
    );
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <Category
        categoryName={this.props.match.params.id}
        category={this.state.category}
        questions={this.state.questions}
      />
    );
  }
}

export default CategoryContainer;