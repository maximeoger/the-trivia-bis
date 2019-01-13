import React, { Component } from 'react';
import GameEnd from './GameEnd';

class GameEndContainer extends Component {
    state = {
        win: this.props.win
    };

    render() {
        const { win } = this.state;
        return (
            <GameEnd
                win={win}
            />
        );
    }
}

export default GameEndContainer;