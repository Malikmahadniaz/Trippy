import React, { Component } from "react";
import { MenuItems } from "./menuitems";
import "./navbar.css";
import {Link} from "react-router-dom";

class Navbar extends Component {
  state = { clicked : false};
  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked});
  };
  render() {
    return (
      <nav className="navbaritems">
        <h1 className="navbarlogo">Trippy</h1>

      <div className="menuicons" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

        <ul className={this.state.clicked ? "navmenu active" : "navmenu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
