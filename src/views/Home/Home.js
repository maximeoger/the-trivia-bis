import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ categories }) => (
  <section>
    <h1>QuizzMe</h1>
      { categories.length > 0 && (
          categories.map(category => (
              <Link key={`/category/${category.id}`} to={`/category/${category.id}`}>{category.title}</Link>
          ))
          )}
  </section>
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