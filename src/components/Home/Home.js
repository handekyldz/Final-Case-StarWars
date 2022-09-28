import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Shiplist from '../Shiplist/Shiplist'
import '../../App.css'
function Home() {
  return (
    <div className='Home'>
        <LandingPage />
        <Shiplist />
    </div>
  )
}

export default Home