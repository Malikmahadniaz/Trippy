import { Component } from "react";


class Destinationdata extends Component{
    render() {
      return (
        <div className={this.props.class}>
        <div className="destxt">
            <h2>{this.props.h2}</h2>
            <p>{this.props.p}</p>
        </div>
        <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
        </div>
    </div>
      )
    }
}
export default Destinationdata;