import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class NavBar extends Component {
render() {
        return (
          <div>
              <ul className="navBar">
                <li id="Register" ><Link to="/">Register</Link></li>
                <li id="Login"><Link to="/login">Login</Link></li>
                <li id="See all Users"><Link to="/userList">See all users</Link></li>
              </ul>
          </div>
        )
      }
}