import { useState } from "react";
import data from "../../utils/data.json";
import CrewItem from "./components/CrewItem.jsx";
import "./crew.scss";

const crew = data.crew;

const Crew = () => {
    const [currentCrew, setCurrentCrew] = useState("commander");
    const [activeCrew, setActiveCrew] = useState("commander");

    const handleClick = (crew) => {
        setCurrentCrew(crew);
        setActiveCrew(crew);
    }

    return (
        <div className="crew">
            <div className="crew-content">
                <div className="crew-header">
                    <h2 className="text-preset-5 o2">02</h2>
                    <h2 className="text-preset-5">MEET YOUR CREW</h2>
                </div>
                <div className="crew-item">
                    <div className="crew-item-content">
                        {
                            crew.filter((item) => (currentCrew === item.role.toLowerCase())).map((item, index) => (<CrewItem key={index} item={item} />))
                        }
                        <div className="crew-list-wrap">
                            <ul className="crew-list">
                                <li className={`crew-list-button${activeCrew === "commander"? " active" : ""}`} onClick={() => handleClick("commander")}></li>
                                <li className={`crew-list-button${activeCrew === "mission specialist"? " active" : ""}`} onClick={() => handleClick("mission specialist")}></li>
                                <li className={`crew-list-button${activeCrew === "pilot"? " active" : ""}`} onClick={() => handleClick("pilot")}></li>
                                <li className={`crew-list-button${activeCrew === "flight engineer"? " active" : ""}`} onClick={() => handleClick("flight engineer")}></li>
                            </ul>
                        </div>
                    </div>
                    <div className="crew-img-div">
                        {
                            crew.filter((item) => ( currentCrew === item.role.toLowerCase() )).map((item, index) => (<img className="crew-img" key={index} src={item.images.png} alt="crew image"/>))
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Crew;