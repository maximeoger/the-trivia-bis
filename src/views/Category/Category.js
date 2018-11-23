import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
width: 90vw;
margin: 0 auto;
`

const Score = styled.p`
font-size: 28px;
text-align: center;
font-weight: bold;
`
const Category = ({ categoryName, questions }) => (
  <Section>
    <h1>Category page: {categoryName}</h1>
    <Score>0</Score>
    {questions.length > 0 && (
      <section>
        {questions.map(question => (
          <div key={question.id}>
            <p>{question.question}</p>
          </div>
        ))}
      </section>
    )}
  </Section>
);

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  question: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      answer: PropTypes.string,
      question: PropTypes.string,
      value: PropTypes.number,
      airdate: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
      category_id: PropTypes.number,
      game_id: PropTypes.number,
      invalid_count: PropTypes.number,
      category: PropTypes.object,
    })
  )
};

export default Category;