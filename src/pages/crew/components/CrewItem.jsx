import "./crewItem.scss";

const CrewItem = (props) => {
    return (
        <div className="crew-item-wrap">
            <div className="crew-item-header">
                <h2 className="text-preset-4">{props.item.role}</h2>
                <h1 className="text-preset-3">{props.item.name}</h1>
            </div>
            <p className="text-preset-9">{props.item.bio}</p>
        </div>
    );
}

export default CrewItem;