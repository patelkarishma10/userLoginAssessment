import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Register } from './register';
import { Login } from './login';
import { UserList } from './userList';
import { NavBar } from './navBar';

export class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavBar />
                    <Route exact path="/" render={(props) => <Register passedFunction={this.props.onLoad} />} />
                    {/* <Route path="/login" render={(props) => <Login passedFunction={this.props.onLoad} />} /> */}
                    <Route path="/login" component={Login} />
                    <Route path="/userList" render={(props) => <UserList passedFunction={this.props.onLoad} dataSent={this.props.dataSent} />} />
                </Router>
            </div>
        )
    }
}
