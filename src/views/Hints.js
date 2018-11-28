import React from 'react'
import { Link } from 'react-router-dom'
import { hints } from '../data'

import './Hints.css'

const reset = () => {
  localStorage.clear()
}

const Hint = ({ hint, className }) => {
  const isAnswered = localStorage.getItem(hint.id)
  return (
    <div className="col ">
      <div className={`box-wrapper ${className}`}>
        <Link
          className="link"
          key={hint.id}
          to={isAnswered ? `/teisingai/${hint.id}` : `/uzduotis/${hint.id}`}
        >
          <div className={isAnswered ? 'box-aswered' : 'box'}>
            <img style={{width: 124, height: 124}}src={hint.iconPath} alt={hint.title} />
            {/* <i className={hint.iconPath} /> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export const Hints = () => {
  return (
    <div class="container container-box">
      <div className="hint-header-wrapper">
        <h1 className="hints-header">UŽUOMINOS</h1>
      </div>

      <div class="row">
        {hints.map((hint, index) => {
          if (index === 3){
            return <Hint className="h-m-left" hint={hint} /> 
          }

          if(index === 4) {
            return <Hint className="h-m-right" hint={hint} /> 
          }

          return <Hint hint={hint} />
        })}
      </div>
      <div className="resetWrapper text-center">
        <Link to="/" onClick={reset}>Pradėti iš naujo</Link>
      </div>
    </div>
  )
}
