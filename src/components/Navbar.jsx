import React from 'react'
import "./navbar.css";
import { Link } from 'react-router-dom';
const Navbar = (props) => {
    return (
        <>

            <div className="nav">
                <div className="title">
                    <h1>MyChannel</h1>
                </div >                
                    <ul className='list'>
                        <li><Link className='listItem' to="/">Home</Link></li>
                        <li><Link className='listItem' to="/about">About</Link></li>
                        <li><Link className='listItem' to="/service">Service</Link></li>
                        <li><Link className='listItem' to="/contact">Contact</Link></li>
                    </ul>               
            </div>


        </>
    )
}

export default Navbar
