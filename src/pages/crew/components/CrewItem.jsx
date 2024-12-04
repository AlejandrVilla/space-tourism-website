import BackImage from "../../../components/common/BackImage";

const CrewItem = (props) => {
    return (
        <div>
            <h2>{props.item.role}</h2>
            <h1>{props.item.name}</h1>
            <p>{props.item.bio}</p>
            <BackImage src={props.item.images.png}/>
        </div>
    );
}

export default CrewItem;