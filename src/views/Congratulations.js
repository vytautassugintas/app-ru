import React from 'react'
import moment from 'moment'
import { isComplete } from './utils'
import { Link } from 'react-router-dom'
import './Congratulations.css'

const reset = () => {
  localStorage.clear()
}

export const Congratulations = () => {
  if (!isComplete()) {
    return null
  }

  const startDate = localStorage.getItem('startDate')
  let diffMinutes = 0
  let diffHours = 0

  if (startDate) {
    const now = moment(new Date()) //todays date
    const end = moment(new Date(parseInt(startDate))) // another date

    diffMinutes = now.diff(end, 'minutes')
    diffHours = now.diff(end, 'hours')
  }

  const showHours = diffHours > 0

  return (
    <div className="container gz-wrapper">
      <div className="gz-header-wrapper">
        <h1 className="gz-header">SVEIKINAME!</h1>
      </div>
      <div className="gz-text-wrapper">
        <p className="gz-text">
          Visas užduotis įvykdėte teisingai ir esate kelyje pažįstant Lietuvos
          žydų kultūrą.
        </p>
      </div>
      <div className="gz-timer-wrapper">
        <p className="gz-timer-text">UŽDUOTIS ĮVYKDĖTE PER:</p>
        <div className="flex-container-center">
          <div className="gz-confet-icon-wrapper">
            <img
              className="gz-human"
              src="/assets/confetti.svg"
              alt="happiness"
            />
          </div>
          <div>
            <p className="gz-timer">
              {showHours ? `${diffHours} h` : `${diffMinutes} min.`}
            </p>
            <div className="gz-human-icon-wrapper">
              <img
                className="gz-human"
                src="/assets/happiness.svg"
                alt="happiness"
              />
            </div>
          </div>
          <div className="gz-confet-icon-wrapper">
            <img
              className="gz-human"
              src="/assets/confetti_r.png"
              alt="happiness"
            />
          </div>
        </div>
        <div className="resetWrapper text-center">
          <Link to="/" style={{color: '#32a6f1'}} onClick={reset}>
            Pradėti iš naujo
          </Link>
        </div>
      </div>
    </div>
  )
}
