import TechList from "./components/TechList";
import data from "../../utils/data.json";
import TechItem from "./components/TechItem";

const technology = data.technology;

const Technology = () => {
    return (
        <div>
            <TechList>
            {
                technology.map((item, index) => (
                    <TechItem key={index} item={item}/>
                ))
            }
            </TechList>
        </div>
    );
}

export default Technology;