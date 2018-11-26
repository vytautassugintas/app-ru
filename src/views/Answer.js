import React from "react";
import { hints } from '../data';

import "./Answer.css";

export class Answer extends React.Component {

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
    const {value, hint} = this.state;
    
    if(value.toLowerCase() === hint.answer.toLowerCase()){
      alert('valio');
      localStorage.setItem(hint.id, true);
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