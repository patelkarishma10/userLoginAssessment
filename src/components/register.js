import React, { Component } from 'react';
import axios from "axios";

export class Register extends Component {

      constructor() {
    super();
    this.state = {
      error: ""
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
    if (newItem.username === "" || newItem.email === "" || newItem.password === "" || newItem.password2 === "") {
        this.setState({ error: "Please fill all fields" })
    } else {
        axios
            .post("http://localhost:5000/user/createUser", newItem)

            .then(response => {
                console.log(response);
                this.setState({ error: "Successfully registered" });
                this.props.passedFunction();
            });

    }
}

    render() {

        return (
            <div className="formDiv">
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" className="form-control"/>
                    <br />

                    <label htmlFor="email" >Email: </label>
                    <input type="text" id="email" className="form-control"/>
                    <br />

                    <label htmlFor="password" >Password: </label>
                    <input type="text" id="password" className="form-control"/>
                    <br />

                    <label htmlFor="password2" >Verify password: </label>
                    <input type="text" id="password2" className="form-control"/>
                    <br />

                    <input type="submit" className="btn btn-dark" value="register" />
                </form>
 
                <p style={{color: 'red'}}>{this.state.error}</p> 
            </div>

        );
    }
}