import React, { Component } from 'react';
import Home from './Home';
import api from '../../helpers/api';

class HomeContainer extends Component {
  state = {
    categories: [],
  }


  render() {
    return (
      <Home />
    );
  }
}

export default HomeContainer;