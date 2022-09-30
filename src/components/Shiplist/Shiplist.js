import { useState, useEffect } from 'react';
import axios from 'axios';
import Shipcard from '../Shipcard/Shipcard';
import { TailSpin } from 'react-loader-spinner';
import '../../App.css'

// This component is listing all starships from API.

function Shiplist() {
    /*
    totalListofShip: This contains ships in a list.
    countofShip: This is total count of ships in api.
    isLoading: This is a bool statement according to api response.
    loadCount: This is load number how many times user click load button.
    isFull: This is a bool statement and it changes according to listing all ship.
    filteredText: This is value of search area.
    */
    const [totalListofShip, setTotalListofship] = useState([])
    const [countofShip, setCountofShip] = useState(-1);
    const [isLoading, setIsLoading] = useState(true);
    const [loadCount, setLoadCount] = useState(1);
    const [isFull, setIsFull] = useState(false);
    const [filteredText, setFilteredText] = useState("")

    useEffect(() => {
        // If countofShip isn't equal to total count of ship in API, call getData function and show more list.
        // If it is equal, already we are showing all ships so turn isFull true.
        if (countofShip !== totalListofShip.length) {
            getData(loadCount);
        }
        else {
            setIsFull(true)  
        }
    }, [loadCount]);


    // I took data of selected ship in API with ship id.
    // This is async function and returns a Promise so we have to wait response from API.
    async function getData(pageNumber) {
        const data = await axios.get("https://swapi.dev/api/starships/", { params: { page: pageNumber } });
        setCountofShip(data.data.count)
        setTotalListofship(totalListofShip.concat(data.data.results));
        setIsLoading(false);
    }

    // If user clicks show more button, app renders the component again and gets more data from api.
    // If it already shows all ships, button and function don't anything.
    const loadMore = () => {
        if (isFull === false) {
            return setLoadCount(loadCount + 1);
        }

    };

    // I filtered ships by its names and models.
    const filtered = totalListofShip.filter((ship) => {
        let aboutName = ship['name'].toLowerCase().includes(filteredText.toLowerCase());
        let aboutModel = ship['model'].toLowerCase().includes(filteredText.toLowerCase());
        return aboutName + aboutModel
    });


    return (
        <div className='Shiplist'>

            <input
                className='search-input'
                placeholder='Please write starship name or model'
                value={filteredText}
                onChange={(e) => setFilteredText(e.target.value)}
            >
            </input>

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

            <ul>
                {!isLoading && filtered.map((ship) => (
                    <Shipcard key={ship.name} ship={ship} />
                ))}
            </ul>

            {!isFull && < button className='load-button' onClick={loadMore}>Show more</button>}

            {isFull && <div className='full'>Already all list is showed!</div>}
        </div>
    );
}

export default Shiplist;