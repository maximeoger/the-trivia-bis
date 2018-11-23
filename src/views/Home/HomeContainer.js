import React, {
  Component
} from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
    categories: [],
  }
  async componentDidMount() {
    const categories = api.getAllCategories().then(categories =>
      this.setState({
        categories: categories,
      })
    );
  }
  render() {
    return (<
      Home categories={
        this.state.categories
      }
    />
    );
  }
}

export default HomeContainer;