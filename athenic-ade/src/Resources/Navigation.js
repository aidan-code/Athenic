import React from 'react'
import './navigation.css'
import logo from '../Assets/Athenic.png'
import { Link } from 'react-router-dom'
 
const Navigation = () => {
  return (
    <nav className='Navigation'>
        <div className='nav-logo'>
            <img src={logo} alt='logo'/>
        </div>

        <div className='navs'>
            <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>

            <div className='cta'>
                <p className='login'><Link to = '/'>Login</Link></p>
                <p className='signup'><Link to = "/">SignUp</Link> </p>
            </div>

        </div>
       
    </nav>
  )
}

export default Navigation