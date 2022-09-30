import React from 'react'
import "./LandingPage.css"

//This component describes the site information to user.

function LandingPage() {
  return (
    <div className='landing-page'>

      <div className='landing-page-container'>
        <div className='content'>
          <h1>MAY THE FORCE BE WITH YOU!</h1>
          <p>Do you want to explore the famous starships of Star Wars?
            Starships and all the details are here</p>

            {/* This button scrolls to directly list of starships and their cards */}
          <button onClick={() => {
            window.scrollTo({
              top: 450,
              behavior: 'smooth',
            })
          }}
            className='explore-button'>Explore</button>
        </div>
        <img className='landing-img' src={require('../../assets/landing2.png')} alt='ship'></img>
      </div>
    </div>
  )
}

export default LandingPage