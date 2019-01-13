import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, Logo, GameOverTitle } from '../../components/styled-components';
import "../../styles/index.css";

const GameEnd = ({ win }) => (
    <Section>
        <Logo>QuizzME</Logo>
        <GameOverTitle>{win ? 'You Win' : 'Game Over'}</GameOverTitle>
        <section className={"gameOverSection"}>
            <p>You're such a {win ? 'bg' : 'loser'} !</p>
            <Link to={`/`}>
                <Button>I know... {win ? '' : '😞'}</Button>
            </Link>
        </section>
    </Section>
);

export default GameEnd;
