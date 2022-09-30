import React from 'react'
import LandingPage from '../LandingPage/LandingPage'
import Shiplist from '../Shiplist/Shiplist'
import '../../App.css'

//This component is root page of application. Stylesheet of this component is in App.css file.

function Home() {
  return (
    <div className='Home'>
        <LandingPage />
        <Shiplist />
    </div>
  )
}

export default Home