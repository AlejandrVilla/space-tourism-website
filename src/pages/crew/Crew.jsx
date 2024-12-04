import data from "../../utils/data.json";
import CrewList from "./components/CrewList.jsx";
import CrewItem from "./components/CrewItem.jsx";

const crew = data.crew;

const Crew = () => {
    return (
        <div>
            <CrewList>
            {
                crew.map((item, index) => (
                    <CrewItem key={index} item={item}/>
                ))
            }
            </CrewList>
        </div>
    );
}

export default Crew;