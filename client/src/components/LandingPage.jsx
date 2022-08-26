import React from 'react'
import {Link} from 'react-router-dom'
import './landingPage.css'
const LandingPage = () => {
  return (
    <div className='containerLangingPage'>
        <Link to='/home'>
            <button className='Btn'>Get Inside</button>
        </Link>
    </div>
  )
}

export default LandingPage