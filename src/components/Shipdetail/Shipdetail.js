import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../../assets/arrow-left-solid.svg';
import { TailSpin } from 'react-loader-spinner';
import "./Shipdetail.css";

// This component is showing every detail of selected ship.
// Stylesheet of this component is in Shipdetail.css file.

function ShipDetail() {
    const [ship, setShip] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();

    useEffect(() => {
        getData()
    }, []);

    // I took data of selected ship in API with ship id.
    // This is async function and returns a Promise so we have to wait response from API.
    async function getData(){
        const data = await axios(`https://swapi.dev/api/starships/${id}`);   
        setShip(data.data)  
        setIsLoading(false);
    }

  return (
    <div className='ship-detail'>
         
        <Link to={"/"}><ArrowLeft className='arrow-left-icon' /></Link>
        

        
        {isLoading && <TailSpin 
                    className="tail-spin"
                    height="40"
                    width="40"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    />}

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
                {/* I took image of ship from my assets. */}
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