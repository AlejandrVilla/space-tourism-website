import data from "../../utils/data.json";
import DestinationItem from "./components/DestinationItem";
import { useState } from "react";
import "./destination.scss";

const destinations = data.destinations;

const Destination = () => {
    const [currentItem, setCurrentItem] = useState("moon");
    const [activeDest, setActiveDest] = useState("moon");

    const handleClick = (item) => {
        setCurrentItem(item);
        setActiveDest(item);
    }

    return (
        <div className="destination">
            <div className="destination-content">
                <div className="destination-header">
                    <h2 className="text-preset-5 o1">01</h2>
                    <h2 className="text-preset-5">PICK YOUR DESTINATION</h2>
                </div>
                <div className="destination-item">
                    <div className="destination-img-div">
                        {destinations.filter((item) => (currentItem === item.name.toLowerCase())).map((item, index) => (<img className="destination-img" key={index} src={item.images.png} />))}
                    </div>
                    <div className="destination-item-content">
                        <div className="destination-item-wrap">
                            <div className="destination-nav">
                                <p className={`text-preset-8 dest-link${activeDest === "moon"? " active": ""}`} onClick={() => handleClick("moon")}>MOON</p>
                                <p className={`text-preset-8 dest-link${activeDest === "europa"? " active": ""}`} onClick={() => handleClick("europa")}>EUROPA</p>
                                <p className={`text-preset-8 dest-link${activeDest === "mars"? " active": ""}`} onClick={() => handleClick("mars")}>MARS</p>
                                <p className={`text-preset-8 dest-link${activeDest === "titan"? " active": ""}`} onClick={() => handleClick("titan")}>TITAN</p>
                            </div>
                            {destinations.filter((item) => (currentItem === item.name.toLowerCase())).map((item, index) => (<DestinationItem key={index} item={item} />))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destination;