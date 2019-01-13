import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';
import GameOverContainer from '../../views/GameOver/GameOverContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/category/:id" component={CategoryContainer} />
            <Route path="/game-over" component={GameOverContainer} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
