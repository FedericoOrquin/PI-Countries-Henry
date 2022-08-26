import React from 'react'
import {Link} from 'react-router-dom'
import './home.css';
import NavBar from './NavBar';
import Sorts from './Sorts';
import Cards from './Cards'

const Home = () => {

    

  return (
    <div className='ContainerApp' >
      <Link to='/'>
        <button className='btnBack'>Return</button>
      </Link>
      
        <NavBar/>
     
        <Sorts />

        <Cards />
      
    </div>
  )
}

export default Home