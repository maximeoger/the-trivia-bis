import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, Logo, GameOverTitle } from '../../components/styled-components';
import "../../styles/index.css";

const GameOver = ({ categories }) => (
    <Section>
        <Logo>QuizzME</Logo>
        <GameOverTitle>Game Over</GameOverTitle>
        <section className={"gameOverSection"}>
            <p>You're such a loser !</p>
            <Link to={`/`}>
                <Button>I know... 😞</Button>
            </Link>
        </section>
    </Section>
);

export default GameOver;
