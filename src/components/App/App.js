import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';
import GameEndContainer from '../../views/GameEnd/GameEndContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Fragment>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/category/:id" component={CategoryContainer} />
            <Route path="/game-over" component={GameEndContainer} />
            <Route path="/game-win" render={() => <GameEndContainer win={true} />} />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
