import React from "react";
import { Link } from "react-router-dom";
import { hints } from "../data";

import './Hints.css';

const Hint = ({hint}) => (
  <div className="col">
    <div className="box-wrapper">
      <Link className="link" to={`/uzduotis/${hint.id}`} key={hint.id}>
        <div className="box">
          <i className={hint.iconPath}></i>
        </div>
      </Link>    
    </div>
  </div>
)

export const Hints = () => {
  return (
    <div class="container container-box">
    <div className="row">
      <div className="col">
        <h1 className="display-3">Užuominos</h1>
        <p class="lead">Suraskite visas vietas</p>
      </div>
      <div className="col second">
      
      </div>
    </div>
      
      <div class="row">
      {
        hints.map(hint => <Hint hint={hint} />)
      }
      </div>
    </div>
  )
};