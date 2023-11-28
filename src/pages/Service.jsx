import React from 'react'
import { INFO } from '../Info';
import "./service.css"
import Footer from '../components/Footer';
const Service = () => {
  return (
    <>
      <div className="box1 my-5">
        <h1>OUR SERVICES</h1>
        <div className="box2">
          {
            INFO.map((item) => {
              return (
                <div key={item.id} className='part'>
                  <img src={item.image} alt="img" className='pic' />
                  <div className="innerPart">
                    <h2>{item.title}</h2>
                    <p>{item.information}</p>
                    <p className='rating'>{item.rating}</p>
                  </div>
                </div>)
            })
          }
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  )
}

export default Service
