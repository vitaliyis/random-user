import React from "react";
import myPhoto from '../../../assets/img/vetal.jpg'

const AboutMe = () => {
  return (
    <div className="card mb-3 mt-4">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={myPhoto} className="card-img" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Front-End React Developer: Vitaliy.</h5>
            <p className="card-text"><a href="mailto:vetal.friend@gmail.com">vetal.friend@gmail.com</a></p>
            <p className="card-text"><small className="text-muted">Last updated 21.10.2020</small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;