import React, { Component } from 'react';
import axios from "axios";

export class Login extends Component {


    constructor() {
        super();
        this.state = {
            message: ""
        };
    }

//  {password: password}

    login = (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
         if (username === "" || password === "" ) {
        this.setState({ message: "Please fill all fields" })
    } else {
        axios
            .get("http://localhost:5000/user/name/"+ username + "/" + password )
            .then(response => {
                this.setState({ message:  JSON.stringify(response.data.Status) });
                console.log(response.data);
            })
            
    }
    }

    render() {

        return (
            <div className="formDiv">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" className="form-control" />
                    <br />

                    <label htmlFor="password" >Password: </label>
                    <input type="content" id="password" className="form-control" />
                    <br />

                    <input type="submit" className="btn btn-dark" value="login" />
                </form>

                 <p style={{color: 'red'}}>{this.state.message}</p> 
            </div>

        );
    }
}