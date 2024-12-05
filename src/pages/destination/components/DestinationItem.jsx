import "./destinationItem.scss";

const DestinationItem = (props) => {
    return (
        <>
            <div className="dest-item-header">
                <h1 className="text-preset-2">{props.item.name.toUpperCase()}</h1>
                <p className="text-preset-9">{props.item.description}</p>
            </div>
            <hr className="dest-item-hr"/>
            <div className="dest-item-body">
                <div className="dest-item-body-content">
                    <h3 className="text-preset-7">avg. distance</h3>
                    <p className="text-preset-6">{props.item.distance.toUpperCase()}</p>
                </div>
                <div className="dest-item-body-content">
                    <h3 className="text-preset-7">est. travel time</h3>
                    <p className="text-preset-6">{props.item.travel.toUpperCase()}</p>
                </div>
            </div>
        </>
    );
}

export default DestinationItem;