import React, { Component, createRef } from 'react';
import api from '../../helpers/api';
import Category from './Category';

class CategoryContainer extends Component {
  state = {
    category: null,
    currentQuestion: 0,
    wrongTry: 3,
    error: null,
    score : 0
  };

  clues = [];

  // createRef in order to bring back input value to its parent
  answerInput = createRef();

  // async needed when using promise
  async componentDidMount() {

    const data = await api.getCategoryById(this.props.match.params.id);

    // stored response in the state;
    this.clues = api.getItem("jeu-trivia");

    this.setState({
      category: data,
      score: 0,
    });

  }

  handleSubmit = (e) => {
    // here I prevent the default bh of submitting form
    e.preventDefault();

    // write logic to handle good/bad answer
    // Récupération de la question en cours
    let currentClues = this.state.category.clues[this.state.currentQuestion];
    // Récupération de la réponse dans l'input
    const answer = this.answerInput.current.value;

    // Test si la réponse est bonne
    if (currentClues.answer === answer) {
   
          //+1 si bonne réponse
        this.setState(prevState => {
            score: prevState.score += 1
        });

        this.clues[this.state.category.id] = {'score' : this.state.score, 'lastIndex' : this.state.currentQuestion };

        for(let key in this.clues){
            if(this.clues[key] !== null ){
                console.log(this.clues[key]);
                this.setState(prevState => {
                    score: prevState.score += this.clues[key].score;
                });
            }
        }

        api.saveItem("jeu-trivia" ,  this.clues);

        // if no more question, remove category from categories playable
        if(this.state.category.clues[this.state.currentQuestion + 1] == null){
            // increment score somewhere and redirect to /
            this.redirect();
        }else{

            // increment currentQuestion
            this.setState(prevState => {
                prevState.currentQuestion += 1
                prevState.error = true
            });

        }
    }
    else {

      if (this.state.wrongTry === 1) {
        this.showGameOver();
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
      question: currentClues,
      answer: answer
    };
    //api.saveItem(currentClues.id, JSON.parse(userAnswer));

    this.answerInput.current.value = "";

    this.forceUpdate();
    // check if answer is equal to the requested answer from the current question
  }

  handleReset = () => {

    api.deleteItem('jeu-trivia');

    this.redirect();

  }

  redirect() {
    this.props.history.push(`/`)
  }

  showGameOver() {
    this.props.history.push(`/game-over`)
  }

  render() {
    const { category, currentQuestion, score, wrongTry, error } = this.state;

    // at first render, category will be null so we need to wait
    // before using data.
    if (!category) return <div>is loading</div>

    return (
      <Category
        category={category}
        currentQuestionIndex={currentQuestion}
        handleSubmit={this.handleSubmit}
        handleReset={this.handleReset}
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

