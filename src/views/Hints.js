import React from "react";
import { Link } from "react-router-dom";

import { hints } from "../data";

export const Hints = () => (
  <div class="container">
    <h1>Hints view</h1>
    <div class="row">
    {
      hints.map(hint => {
        const a = localStorage.getItem('a');
        localStorage.setItem('s', true);
        return (
          <Link to={`/uzduotis/${hint.id}`}>
            <div class="hint">
              <div class="circle-icon" key={hint.id}>
                <img class="image-icon" style={{width: 64}} src={hint.iconPath} alt={hint.title}/>
              </div>
            </div>
          </Link>
        )
      })
    }
    </div>
  </div>
);