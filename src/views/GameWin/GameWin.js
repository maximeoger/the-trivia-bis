import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Section, Logo, GameWinTitle } from '../../components/styled-components';
import "../../styles/index.css";

const GameOver = () => (
    <Section>
        <Logo>QuizzME</Logo>
        <GameWinTitle>You win</GameWinTitle>
        <section className={"gameOverSection"}>
            <p>You're such a bg !</p>
            <Link to={`/`}>
                <Button>I know...</Button>
            </Link>
        </section>
    </Section>
);

export default GameOver;
