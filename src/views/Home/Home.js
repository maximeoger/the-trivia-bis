import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
width: 90vw;
margin: 0 auto;
`

const Logo = styled.h1`
font-size: 32px;
font-weight: bold;
text-align: left;
font-family: 'Oswald';
`

const Title = styled.h1`
margin: 60px;
`

const Button = styled.button`
height: 40px;
background-color: #fff;
border-radius: 25px;
box-shadow: 0 3px 7px #828282;
padding: 0 30px;
margin: 16px;
cursor: pointer;
color: #828282;
font-size: 14px;
transition: box-shadow 0.25s;
justify-content: space-between;

&:hover {
  box-shadow: 0 4px 7px #5D5D5D;
}
`

const Home = ({ categories }) => (
  <Section>
    <Logo>QuizzME</Logo>
    <Title>chose a category to start the quizz</Title>
    {categories.length > 0 && (
      <section>
        {categories.map(category => (
          <Link to={`/category/${category.id}`} key={category.id}>
            <Button>{category.title}</Button>
          </Link>
        ))}
      </section>
    )}
  </Section>
);

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
};

export default Home;