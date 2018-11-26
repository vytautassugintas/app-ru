import React from "react";
import { hints } from '../data';
import { withRouter } from 'react-router-dom'

import "./Answer.css";

class AnswerComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hint: hints.find(({id}) => this.props.match.params.id === id),
      inputVal: null,
    }
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  validate(){
    const { history } = this.props;
    const { value, hint } = this.state;
    
    if(value.toLowerCase() === hint.answer.toLowerCase()){
      localStorage.setItem(hint.id, true);
      history.push(`/teisingai/${hint.id}`)
    } else {
      console.log('ERROR');
    }

  }

  render(){
    const { hint } = this.state;

    return (
      <div className="container text-center answer-wrapper">
        <h1>{hint.title}</h1>
        <h3>{hint.description}</h3>
        <form>
          <div class="form-group">
            <h2>{hint.answerText}</h2>
            <input 
              value={this.state.value}
              onChange={this.handleChange}
              class="form-control" aria-describedby="answer"/>
          </div>
          <button 
            onClick={this.validate}
            type="button" class="btn btn-primary">Pateikti atsakyma</button>
        </form>
      </div>
    )
  }
};

export const Answer = withRouter(AnswerComponent);