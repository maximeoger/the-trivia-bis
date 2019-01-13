import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';
import { Redirect } from 'react-router-dom'

class CategoryContainer extends Component {

    state = {
        category: null,
        currentQuestion: 0,
        wrongTry : 3,
        error : null
    };

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {

    const data = await api.getCategoryById(this.props.match.params.id);

    // stored response in the state;
      let currentUserAnswer = api.getItem(data.clues[this.state.currentQuestion]);

    this.setState({
        category: data,
        score: 0,
        currentUserAnswer: currentUserAnswer,
    });

  }

  handleSubmit = (e) => {
    // here I prevent the default bh of submitting form
    e.preventDefault();

    // write logic to handle good/bad answer
      //Récupération de la question en cours
      let currentClues = this.state.category.clues[this.state.currentQuestion];
      //récupération de la réponse dans l'input
      const answer = this.answerInput.current.value;

      //Test si la réponse est bonne
      if(currentClues.answer === answer){
          //+1 si bonne réponse
          this.setState(prevState => {
              score: prevState.score += 1
          });

          // if no more question, remove category from categories playable
          if(this.state.category.clues[this.state.currentQuestion + 1] == null){
              // increment score somewhere and redirect to /
              this.redirect();
          }

          // increment currentQuestion
          this.setState(prevState => {
              prevState.currentQuestion += 1
          });

          this.setState(prevState => {
              prevState.error = true
          });

          api.saveItem(this.state.category.id, {'score' : this.state.score, 'lastIndex' : this.state.currentQuestion });

      }else{

          if(this.state.wrongTry === 0){
              this.redirect();
          }
          this.setState(prevState => {
              wrongTry: prevState.wrongTry -= 1
          });

          this.setState(prevState => {
              prevState.error = false
          });

      }

    // save in the storage the id of the question
      let userAnswer = {
          question : currentClues,
          answer : answer
      };
      //api.saveItem(currentClues.id, JSON.parse(userAnswer));

      this.answerInput.current.value = "";

      this.forceUpdate();
    // check if answer is equal to the requested answer from the current question
  }

    redirect() {
        this.props.history.push(`/`)
    }

  render() {
    const { category, currentQuestion,score,wrongTry,error } = this.state;

    // at first render, category will be null so we need to wait
    // before using data.
    if (!category) return <div>is loading</div>

    return (
      <Category
        category={category}
        currentQuestionIndex={currentQuestion}
        handleSubmit={this.handleSubmit}
        wrongTry={wrongTry}
        score={score}
        error={error}
        // plug createRef to chidlren
        answerInput={this.answerInput}
      />
    );
  }
}

export default CategoryContainer;
