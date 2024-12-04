const TechItem = (props) => {
    return (
        <div>
            <h2>the terminology...</h2>
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
            <img src={props.item.images.portrait}/>
        </div>
    );
}

export default TechItem;