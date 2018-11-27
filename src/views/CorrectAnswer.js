import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { hints } from '../data'
import './CorrectAnswer.css'

export const CorrectAnswer = withRouter(({ history, match }) => {
  const { id: answerId } = match.params
  const isAnswered = localStorage.getItem(answerId)

  if (!isAnswered) {
    return null
  }

  const { congrats } = hints.find(({ id }) => id === answerId)
  console.log(congrats)
  console.log({ history, match })

  return (
    <div className="container correct-answer-wrapper">
      <div className="correct-header text-center">
        <h1>Teisingai</h1>
      </div>
      <div class="row">
        <div class="col-md-4 img-wrapper">
          <img
            src="https://image.ibb.co/dDW27U/Work_Section2_freelance_img1.png"
            class="rounded-circle img-fluid"
            alt=""
          />
        </div>
        <div class="col-md-8">
        <h2>{congrats.title}</h2>
          <h4 class="subheading">
          </h4>
          <p class="text-muted">
          {congrats.description}
          </p>
        </div>
      </div>
      
      <div className="center-wrapper">
        <div className="cta-wrapper">
          <Link to="/uzuominos" className="cta">
            Uzuomenos
          </Link>
        </div>
      </div>
    </div>
  )
})
