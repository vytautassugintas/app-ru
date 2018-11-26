import React from "react";
import { Link, withRouter } from 'react-router-dom'
import { hints } from '../data';
import './CorrectAnswer.css'

export const CorrectAnswer = withRouter(({ history, match }) => {
  const { id: answerId } = match.params;
  const isAnswered = localStorage.getItem(answerId);
  
  if(!isAnswered) {
    return null;
  }

  const { congrats } = hints.find(({id}) => id === answerId);
  console.log(congrats);
  console.log({history, match});

 return (
  <div>
    <h1>Teisingai</h1>

    <h2>{congrats.title}</h2>
    <p>{congrats.description}</p>

    <div className="center-wrapper">
      <div className="cta-wrapper">
        <Link to="/uzuominos" className="cta">Uzuomenos</Link>
      </div>
    </div>
  </div>
)
});