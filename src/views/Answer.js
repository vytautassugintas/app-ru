import React from 'react'
import { hints } from '../data'
import { withRouter, Link } from 'react-router-dom'

import './Answer.css'

import { isComplete } from './utils'

class AnswerComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hint: hints.find(({ id }) => this.props.match.params.id === id),
      inputVal: null,
      error: false,
    }
    this.handleChange = this.handleChange.bind(this)
    this.validate = this.validate.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  onBlur() {
    this.setState(() => ({ error: false }))
  }

  validate() {
    const { history } = this.props
    const { value, hint } = this.state

    if (value && value.toLowerCase() === hint.answer.toLowerCase()) {
      localStorage.setItem(hint.id, true)
      if (isComplete()) {
        history.push(`/sveikiname`)
      } else {
        history.push(`/teisingai/${hint.id}`)
      }
    } else {
      this.setState(() => ({ error: true }))
    }
  }

  render() {
    const { hint, error } = this.state

    return (
      <div className="container text-center answer-wrapper">
        <div className="flex-container flex-row">
          <div>
            <span className="back-arrow">
              <Link to="/uzuominos">
                <i class="fas fa-angle-left" />
              </Link>
            </span>
          </div>
          <div className="answer-header-wrapper">
            <h1>{hint.title}</h1>
          </div>
          <div />
        </div>
        <p class="text-muted">{hint.description}</p>
        <form>
          <div class="form-group">
            <p>{hint.answerText}</p>
            <div className="answer-input-wrapper">
              <input
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={this.onBlur}
                className={`form-control answer-input ${
                  error ? 'is-invalid' : ''
                }`}
                aria-describedby="answer"
              />
            </div>
            {error ? (
              <p class="error-message">Neteisingai</p>
            ) : (
              <div className="error-placeholder" />
            )}
          </div>
          <div className="answer-button-wrapper">
            <button
              onClick={this.validate}
              type="button"
              class="btn btn-primary answer-button"
            >
              Pateikti atsakyma
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export const Answer = withRouter(AnswerComponent)
