import React, { useState } from 'react'
import "./contact.css";
import Footer from "../components/Footer"


const Contact = () => {
  const [text, setText] = useState('');
  const [mail, setMail] = useState('');
  const [num, setNum] = useState('');


  const handelOnChange1 = (event) => {
    setText(event.target.value);
  }
  const handelOnChange2 = (event) => {

    setMail(event.target.value);
  }
  const handelOnChange3 = (event) => {
    setNum(event.target.value);
  }


  const handleOnClick = () => {
    if (text !== "" && mail !== "" && num !== null) {
      alert(text + " your information has been succesfully submitted")
    }
    else {
      alert("Enter your all details properly")
    }
  }



  return (
    <>
      <div className='contactBox'>
        <h1>Contact us</h1>
        <div className="innerBox">
          <form >
            <input type="text" placeholder='Enter your name' onChange={handelOnChange1} />
            <input type="email" placeholder='Enter your email' onChange={handelOnChange2} />
            <input type="number" placeholder='Enter your phone Number' onChange={handelOnChange3} />
          </form>
        </div>
        <button type='button' onClick={handleOnClick}>Submit</button>
        <div className="foot">
          <Footer />
        </div>
      </div>



    </>
  )
}

export default Contact
