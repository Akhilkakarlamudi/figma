import {Component} from 'react'

import './index.css'

class BannerSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <h4 className="heading">Home</h4>
          <h4 className="heading">City</h4>
          <h4 className="heading">News</h4>
        </div>
        <div>
          <div className="card-container">
            <h1 className="heading-weather">Weather Details</h1>
            <div>
              <div className="para-container">
                <p className="para">Cloudy</p>
                <p className="para">10%</p>
              </div>
              <div className="para-container">
                <p className="para">Humidity</p>
                <p className="para">62%</p>
              </div>
              <div className="para-container">
                <p className="para">Wind</p>
                <p className="para">8Km/h</p>
              </div>
            </div>
          </div>
        </div>
        <div className="degrees-container">
          <div className="deg-con">
            <h1 className="degrees">32&#176;</h1>
          </div>
          <div className="para-con">
            <h2 className="mum">Mumbai</h2>
            <p className="time">06:45 Thursday 23/03/2023</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BannerSection
