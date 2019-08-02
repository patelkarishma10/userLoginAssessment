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
            // e.preventDefault();
     let newItem = {
            username: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password2: e.target[3].value
        }
if (newItem.username === "" || newItem.email === "" || newItem.password === ""|| newItem.password2 === ""){
       this.setState({error:"Please fill all fields"})
   }else{
        axios
            .post("http://localhost:5000/user/createUser", newItem)

            .then(response => {
                console.log("created user")
                this.props.passedFunction();

            });

}
}

    render() {

        return (
            <div className="formDiv">
                <h1>Register</h1>
                <form onSubmit={this.register}>
                    <label htmlFor="username">Name: </label>
                    <input type="text" id="username" className="form-control"/>
                    <br />

                    <label htmlFor="email" >Description: </label>
                    <input type="text" id="email" className="form-control"/>
                    <br />

                    <label htmlFor="ingredients" >Ingredients: </label>
                    <input type="text" id="ingredients" className="form-control"/>
                    <br />

                    <label htmlFor="image" >Image: </label>
                    <input type="text" id="image" className="form-control"/>
                    <br />

                    <input type="submit" className="btn btn-dark" value="create recipe" />
                </form>
{/* 
                <p style={{color: 'red'}}>{this.state.error}</p> */}
            </div>

        );
    }
}