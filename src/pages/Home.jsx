import React from 'react'
import "./home.css";
import web from "../images/office.png";
import Footer from '../components/Footer';
const Home = () => {
  return (
    <>
      <div className='mainContainer'>
        <div className="box">
          <div className="leftSide">
            <div className="titles">
              <h1>Grow your business with</h1>
              <h2>MyChannel</h2>
            </div>
            <p>We are the team of talented devolaper making website</p>
            <div className="starter">
              <a href="/">Get Started</a>
            </div>
          </div>
          <div className="rightSide">
            <img src={web} alt="img" className='rightImg' />
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </>
  )
}

export default Home
