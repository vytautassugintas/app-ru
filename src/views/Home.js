import React from "react";
import { Link } from "react-router-dom";

const setStartTime = () => {
  if(!localStorage.getItem('startDate')){
    localStorage.setItem('startDate', new Date())
  }
}

export const Home = () => (
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-7" style={{paddingTop: 28}}>
          <h1 style={{fontSize: 102}}>Zydu kulturinis palikimas vilniuje</h1>
          <p>5 uzuominos, 5 uzuominos  5 uzuominos 5 uzuominos 5 uzuominos 5 uzuominos 5 uzuominos 5 uzuominos 5 uzuominos 5 uzuominos  </p>
          <p>Ar gali atrasti visus?</p>
          <Link to="/uzuominos" className="btn btn-primary" role="button" onClick={setStartTime}>Pradeti</Link>
        </div>
        <div class="hp-col col-sm blue-bg white-txt hp-col-wrap" style={{paddingTop: 28}}>
          <img style={{width: 128}} src="assets/confetti.svg" alt="Kiwi standing on oval"></img>
          <h3 style={{paddingTop: 36, paddingBottom: 36}}>Zydu kulturinis palikimas Vilniuje balala studentes blalalala lalalal al alsd a sl tratatatatattata</h3>
          <img style={{width: 128, color: '#ffffff', paddingTop: '30%'}} src="assets/round-help-button.svg" alt="Kiwi standing on oval"></img>
        </div>
      </div>
    </div>
  </div>
);