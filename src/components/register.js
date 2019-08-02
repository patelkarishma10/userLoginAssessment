import React, { Component } from 'react';
import axios from "axios";
import { Table } from "reactstrap";

import { RegisterResponse } from './registerResponse';

export class Register extends Component {

    constructor() {
        super();
        this.state = {
            responseData: ""
        };
    }

    register = (e) => {
        e.preventDefault();
        let newItem = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }

        axios
            .post("http://localhost:5000/user/createUser", newItem)

            .then(response => {
                this.setState({
                    responseData: (response.data)
                });
                this.props.passedFunction();
            });


    }

    render() {

        return (
            <div className="formDiv">
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" className="form-control" />
                    <br />

                    <label htmlFor="email" >Email: </label>
                    <input type="text" id="email" className="form-control" />
                    <br />

                    <label htmlFor="password" >Password: </label>
                    <input type="password" id="password" className="form-control" />
                    <br />

                    <label htmlFor="password2" >password2: </label>
                    <input type="password" id="password2" className="form-control" />
                    <br />

                    <input type="submit" className="btn btn-dark" value="register" />
                </form>


                <Table style={{ color: 'red' }}>
                    <RegisterResponse responseData={this.state.responseData} />
                </Table>
            </div>

        );
    }
}