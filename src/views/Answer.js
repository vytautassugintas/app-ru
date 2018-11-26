import React from "react";
import { hints } from '../data';

export const Answer = ({match}) => {
  const hint = hints.find(({id}) => match.params.id === id);

  return (
    <div className="container">
      <h1>{hint.title}</h1>
      <div class="hint">
        <div className="circle-icon" key={hint.id}>
          <img className="image-icon" style={{width: 64}} src={hint.iconPath} alt={hint.title}/>
        </div>
      </div>
      <form>
        <div class="form-group">
          <label for="answer">{hint.answerText}</label>
          <input type="email" class="form-control" id="answer" aria-describedby="answer"/>
        </div>
        <button type="button" class="btn btn-primary">Pateikti atsakyma</button>
      </form>
    </div>
  )
};