import "./techItem.scss";

const TechItem = (props) => {
    return (
        <div className="tech-item-wrap">
            <div className="tech-item-header">
                <h2 className="text-preset-4">the terminology...</h2>
                <h1 className="text-preset-3">{props.item.name}</h1>
            </div>
            <p className="text-preset-9">{props.item.description}</p>
        </div>
    );
}

export default TechItem;