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

  const hint = hints.find(({ id }) => id === answerId)
  const { congrats } = hint

  return (
    <div className="container correct-answer-wrapper">
      <div className="flex-container flex-row">
        <div>
          <span className="back-arrow">
            <Link to="/uzuominos">
              <i class="fas fa-angle-left" />
            </Link>
          </span>
        </div>
        <div className="correct-header text-center">
          <h1>TEISINGAI!</h1>
        </div>
        <div />
      </div>
      <div class="row">
        <div class="col-md-4 img-wrapper">
          <img src={hint.imagePath} class="rounded-circle img-fluid" alt="" />
        </div>
        <div class="col-md-8">
          <h2>{congrats.title}</h2>
          <p class="text-muted">{congrats.description}</p>
        </div>
      </div>

      <div className="center-wrapper">
        <div className="cta-wrapper">
          <Link to="/uzuominos" className="cta">
            UŽUOMINOS
          </Link>
        </div>
      </div>
    </div>
  )
})
