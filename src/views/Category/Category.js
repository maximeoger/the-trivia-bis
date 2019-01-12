import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const Category = ({ category, currentQuestionIndex,score, handleSubmit, wrongTry, answerInput,error }) => {
    const currentQuestion = category.clues[currentQuestionIndex];

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1>You choosed: {category.title}</h1>
          <h2>Votre score : {score}</h2>
        <div className="question">
            {error !== null ?
                <div>
                    {error ? <div className={"success"}>Nice !</div> : <div className={"wrong"}> Wrong</div>}
                </div>

                : ""
            }
          <h3 className="question__title">
            {currentQuestion.question}
          </h3>
          <div className="question__answerInput">
            {/* We give the ref below in order check the value */}
            <input ref={answerInput} />
          </div>

            <div>
                <span>Essai restant : {wrongTry}</span>
            </div>
          <button className="question__submit" type="submit">
            Next
          </button>
        </div>
      </form>

        <Link to={"/"}>Retour</Link>
    </section>
  );
};


Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;