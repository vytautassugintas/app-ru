import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const setStartTime = () => {
  if (!localStorage.getItem('startDate')) {
    localStorage.setItem('startDate', new Date())
  }
}

export const Home = () => (
  <div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-sm-7 main-wrapper"
          style={{ paddingTop: 28, paddingLeft: 64, paddingRight: 64 }}
        >
          <div>
            <h1 className="display-1 header">
              Zydu kulturinis palikimas vilniuje
            </h1>
            <p className="lead" style={{ paddingTop: 36 }}>
              5 uzuominos, 5 vitos, 5 objektai ir 5 atrastos Lietuvos zydu
              kulturos asmenybes! Imink uzuomina - atrasi vieta, vietoje ieskok
              atsakymo, kuri suvesk i atsakymo laukeli
            </p>
            <p className="lead">Ar gali atrasti visus?</p>
            <div className="center-wrapper">
              <div className="cta-wrapper">
                <Link to="/uzuominos" className="cta" onClick={setStartTime}>
                  Pradeti
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="hp-col col-sm hp-col-wrap col2" style={{ paddingTop: 28 }}>
          <div className="text-center">
            <i class="magnifier fas fa-search" />
          </div>
          <div className="copy-wrapper">
            <p class="lead">
              "Zydu kulturinis palikimas Vilniuje" - pilotinis VGTU Kurybos
              komunikacijos studenciu projektas.
            </p>
            <p className="lead">
              Projektas buvo sukurtas studiju uzduociai, kuriai reikejo sukurti
              idomu marsruta Vilniuje (gida).
            </p>
          </div>
          <div className="question-wrapper text-center">
            <i class="question far fa-question-circle" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
