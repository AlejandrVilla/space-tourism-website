import { useNavigate } from "react-router-dom";
import "./card.scss";

const Card = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(() => {
            navigate("/destination");
        }, 300) 
    }

    return (
        <div className="card">
            <div className="card-all">
                <div className="card-content">
                    <h3 className="text-preset-5">SO, YOU WANT TO TRAVEL TO</h3>
                    <h1 className="text-preset-1">SPACE</h1>
                    <p className="text-preset-9">
                    Let’s face it; if you want to go to space, you might as well genuinely go to 
                    outer space and not hover kind of on the edge of it. Well sit back, and relax 
                    because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="explore-div">
                    <div className="outer-circle">
                        <div className="inner-circle" onClick={handleClick}>
                            <p className="text-preset-4">Explore</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;