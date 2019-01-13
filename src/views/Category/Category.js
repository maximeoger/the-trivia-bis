import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import styled from 'styled-components';


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

&:hover {
  box-shadow: 0 4px 7px #5D5D5D;
}
`

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

        <Link to={"/"}><Button>Retour</Button></Link>
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
