import "./tripstyle.css";

function Tripdata(props) {
    return(
        <div className="tcard">
            <div className="tripimg">
                <img alt="img" src={props.image} />
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}
export default Tripdata;