import { useState, useEffect } from 'react';
import axios from 'axios';
import Shipcard from '../Shipcard/Shipcard';

function Shiplist() {
    const [totalListofShip, setTotalListofship] = useState([])
    const [countofShip, setCountofShip] = useState(-1);
    const [isLoading, setIsLoading] = useState(true);
    const [loadCount, setLoadCount] = useState(1);
    const [isFull, setIsFull] = useState(false);
    const [filteredText, setFilteredText] = useState("")

    useEffect(() => {
        if (countofShip !== totalListofShip.length) {
            getData(loadCount);
        }
        else {
            setIsFull(true)
            // Bu true olunca loadbuttonuna tıkladıkça render etmeyi durdur!
        }


    }, [loadCount]);


    async function getData(pageNumber) {
        const data = await axios.get("https://swapi.dev/api/starships/", { params: { page: pageNumber } });
        setCountofShip(data.data.count)
        setTotalListofship(totalListofShip.concat(data.data.results));
        setIsLoading(false);

    }

    const loadMore = () => {
        if (isFull === false) {
            return setLoadCount(loadCount + 1);
        }

    };

    //Arama api göre demiş ama apide yok öyle bir seçenek, bu şekilde yaptım
    const filtered = totalListofShip.filter((ship) => {
        let aboutName = ship['name'].toLowerCase().includes(filteredText.toLowerCase());
        let aboutModel = ship['model'].toLowerCase().includes(filteredText.toLowerCase());
        return aboutName + aboutModel
    });


    return (
        <div>

            <input
                className='search-input'
                placeholder='Please write starship name or model'
                value={filteredText}
                onChange={(e) => setFilteredText(e.target.value)}
            >
            </input>

            {isLoading && <div>Loading...</div>}

            <ul>
                {!isLoading && filtered.map((ship) => (
                    //   <li key={ship.name}>
                    //     <Link to={`/detail/${ship.url.split("/")[5]}`}> {ship.name} - {ship.model} - {ship.hyperdrive_rating} </Link>
                    //   </li>
                    <Shipcard key={ship.name} ship={ship} />
                ))}
            </ul>

            {!isFull && < button className='load-button' onClick={loadMore}>Show more</button>}

            {isFull && <div className='full'>Already all list is showed!</div>}
        </div>
    );
}

export default Shiplist;