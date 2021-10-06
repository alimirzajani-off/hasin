import React from 'react'
import './about.css'

const About = () => {
  return (
    <div>
      <header>
        <h3>ali mirzajani</h3>
        <p>email:ali.mirzajani79@gmail.com</p>
      </header>
      <hr />
      <summary>
        I am a front end developer and I am interested in developing and
        learning up-to-date and useful topics, and among the reference book that
        I have read in full, I can mention You Donot Know Js.
      </summary>
      <div className="info">
        <div>
          <h4>EXPERIENCE</h4>
          <ul className="expe">
            <li>
              <p>APR2019 – SEP 2019</p>
              <h5>FRONT-END DEVELOPER, FREELANCER</h5>
              <h5>REACT-CHARTJS-REDUX</h5>
            </li>
            <li>
              <p>NOV2020 – MAY2021</p>
              <h5>FRONT-END DEVELOPER, SIMORGH</h5>
              <h5>REDUX-CHARTJS-REACT-MATERIAL UI</h5>
            </li>
          </ul>
        </div>
        <div>
          <h4>SKILLS</h4>
          <ul>
            <li>React</li>
            <li>Redux</li>
            <li>Server Side Rendering</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>And design</li>
            <li>Git</li>
            <li>Html5</li>
            <li>Figma</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
