import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
 import "./Shipcard.css";
 
function Shipcard({ ship }) {
    return (
        <div
            className='ship-card'>
            <Link  style={{ textDecoration: 'none' }} to={`/detail/${ship.url.split("/")[5]}`}>
                
                <div className='ship-card-container'>
                    <div className='ship-card-header'>
                        <div className='ship-name'>
                            
                           <h4> {ship.name.toUpperCase()} </h4>
                        </div>
                        <div className='ship-model'>
                            {ship.model}
                        </div>
                    </div>
                    <img
                        className='ship-image'
                        src= {require(`../../assets/starships/${ship.url.split("/")[5]}.jpg`)}
                        alt={ship.name}>
                    </img>
                    <div className='ship-rating'>
                        ⭐Rating: {ship.hyperdrive_rating}
                    </div>    
                </div>
                
            </Link>
            
        </div>
    );
};

export default Shipcard