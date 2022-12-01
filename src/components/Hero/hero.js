import "./herostyle.css";

function Hero(props) {
    return(
        <div className={props.cName}>
            <img alt="hero"  src={props.heroimg} />

            <div className="herotxt">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.btnclass} >{props.herobtntxt}</a>
            </div>
        </div>
    )
}

export default Hero;