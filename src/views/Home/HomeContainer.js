import React, {
  Component
} from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {

  state = {
      categories: [],
  };

  async componentDidMount() {

    const categories = await api.getAllCategories(100);

    this.setState({
      categories
    })

  }

  render() {
    return (
      <Home categories={this.state.categories} />
    );
  }
}

export default HomeContainer;