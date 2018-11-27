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
    <div class="container">
      <div class="row">
        <div
          class="col-sm-7 main-wrapper"
          style={{ paddingLeft: 64, paddingRight: 64 }}
        >
          <div>
            <h1 className="header">Žydų kultūrinis palikimas Vilniuje</h1>
            <p className="hp-content">
              5 užuominos, 5 vietos, 5 objektai ir 5 atrastos Lietuvos žydų
              kultūros asmenybės! Imink užuominą - atrasi vietą, vietoje ieškok
              atsakymo, kurį suvesk į atsakymo laukelį.
            </p>
            <p className="hp-content">Ar gali atrasti visus?</p>
            <div className="center-wrapper">
              <div className="cta-wrapper">
                <Link to="/uzuominos" className="cta" onClick={setStartTime}>
                  PRADĖTI
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="hp-col col-sm hp-col-wrap col2" style={{ paddingTop: 28 }}>
          <div className="flex-contianer-center hp-top-icon">
            <img
              style={{ width: 102, height: 102 }}
              src="/assets/loupe_1.svg"
              alt="search"
            />
          </div>
          <div className="copy-wrapper">
            <p>
              „Žydų kultūrinis palikimas Vilniuje“ - pilotinis VGTU Kūrybos
              komunikacijos studenčių projektas. Projektas buvo sukurtas studijų
              užduočiai, kuriai reikėjo sukurti įdomų maršrutą Vilniuje (gidą).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)
