import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Section, Button, Logo, Header, Question, Input } from '../../components/styled-components';

const Category = ({ category, currentQuestionIndex, score, handleSubmit, handleReset, wrongTry, answerInput, error }) => {
  const currentQuestion = category.clues[currentQuestionIndex];

  return (
    <Section>
      <Header>
        <Logo>QuizzME</Logo>
        <Button onClick={handleReset}>reset score</Button>
      </Header>
      <form onSubmit={handleSubmit}>
        <h1>{category.title}</h1>
        <p>try to get 10 points</p>
        <h2>{score}</h2>
        <div className="question">
          {error !== null ?
            <div>
              {error ? <div className={"success"}>Nice !</div> : <div className={"wrong"}> Wrong</div>}
            </div>

            : ""
          }
          <Question>{currentQuestion.question}</Question>
          <div>
            <Input ref={answerInput} type="text" name="question" placeholder="write your answer here" />
            {/* We give the ref below in order check the value */}
          </div>

          <div>
            <span>you have {wrongTry} attempt(s) left</span>
          </div>
          <Header>
            <Link to={"/"}><Button>change category</Button></Link>
            <Button type="submit">next</Button>
          </Header>
        </div>
      </form>
    </Section>
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
