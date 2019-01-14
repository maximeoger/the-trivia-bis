import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Section, Logo, Title } from '../../components/styled-components';
import "../../styles/index.css";

const Home = ({ categories }) => (
  <Section>
    <Logo>QuizzME</Logo>
    <Title>chose a category to start the quizz</Title>
    {categories.length > 0 && (
      <section className={"list"}>
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
