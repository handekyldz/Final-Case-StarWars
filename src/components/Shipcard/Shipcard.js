import React from 'react'
import { Link } from 'react-router-dom';
import "./Shipcard.css";

//This component is showing starship information on a card. For example name,model, etc. 
//Stylesheet of this component is in Shipcard.css file.

function Shipcard({ ship }) {
    return (
        <div
            className='ship-card'>
            {/* This link element routes to detail URL. And also each ship has own unique URL with own ID.
                I took ship URL from URL key in API and I splited the URL and I found ID.
                End of the process I used ship ID in shipdetail URL */}
                
            <Link style={{ textDecoration: 'none' }} to={`/detail/${ship.url.split("/")[5]}`}>

                <div className='ship-card-container'>
                    <div className='ship-card-header'>
                        <div className='ship-name'>

                            <h4> {ship.name.toUpperCase()} </h4>
                        </div>
                        <div className='ship-model'>
                            {ship.model}
                        </div>
                    </div>

                    {/* There aren't images of starships in API. I searched on google to find new api fr images.
                    But I couldn't. So I searched and found images on google.
                    Then I renamed all of them acording to ship id. I used similar method like detail url.
                    End I took images of starships. */}

                    <img
                        className='ship-image'
                        src={require(`../../assets/starships/${ship.url.split("/")[5]}.jpg`)}
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