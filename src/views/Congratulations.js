import React from 'react'

import { isComplete } from './utils'

import './Congratulations.css'

export const Congratulations = () => {
  // if (!isComplete()) {
  //   return null
  // }

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
            <p className="gz-timer">00:00</p>
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
              src="/assets/confetti_r.svg"
              alt="happiness"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
