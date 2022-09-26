import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-solid.svg';
import "./Shipdetail.css"

// Users can click on any item and go to a detail page that includes passengers,
// max_atmosphering_speed, manufacturer, crew and cargo_capacity in addition to name and model

function ShipDetail() {
    const [ship, setShip] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();

    useEffect(() => {
        getData()
        
    }, []);

    async function getData(){
        const data = await axios(`https://swapi.dev/api/starships/${id}`);   
        setShip(data.data)  
        setIsLoading(false);
    }

  return (
    <div className='ship-detail'>
         
        <Link to={"/"}><ArrowLeft className='arrow-left-icon' /></Link>
        

        
        {isLoading && <div>Loading...</div>}

        {!isLoading && 
        <div className='shipdtl-container'>
            <div className='shipdtl-info'>
                <div className='shipdtl-card-header'>
                    <div className='shipdtl-name'>
                              <h2> Name : {ship.name}</h2>
                    </div>
                    <div className='shipdtl-model'>
                               Model : {ship.model}
                    </div>
                </div>
                <img
                className='shipdtl-image'
                src={require(`../../assets/starships/${id}.jpg`)}
                alt={ship.name}>
                </img>
                <div className='shipdtl-rating'>
                🌟Rating : {ship.hyperdrive_rating}
                </div>    
            </div>
            <div className='shipdtl-details'>
                <div className='shipdtl-id'>
                <span> Id : </span>{id}
                </div>
                <div className='shipdtl-passengers'>
                <span> Passengers : </span> {ship.passengers}
                </div>
                <div className='shipdtl-speed'>
                <span> Max atmosphering speed : </span> {ship.max_atmosphering_speed}
                </div>
                <div className='shipdtl-manufacturer'>
                <span> Manufacturer : </span> {ship.manufacturer}
                </div>
                <div className='shipdtl-crew'>
                <span>Crew : </span> {ship.crew}
                </div>
                <div className='shipdtl-capacity'>
                <span>Cargo capacity : </span> {ship.cargo_capacity}
                </div>
            </div>
        </div>}
</div>

  );
};





export default ShipDetail