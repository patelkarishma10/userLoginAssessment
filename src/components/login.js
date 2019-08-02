import React, { Component } from 'react';

export class Login extends Component {


login = (e) => {

}

    render() {

        return (
            <div className="formDiv">
                <h1>Login</h1>
                <form onSubmit={this.login}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" className="form-control"/>
                    <br />

                    <label htmlFor="description" >Description: </label>
                    <input type="content" id="description" className="form-control"/>
                    <br />

                    <input type="submit" className="btn btn-dark" value="create recipe" />
                </form>

                {/* <p style={{color: 'red'}}>{this.state.error}</p> */}
            </div>

        );
    }
}