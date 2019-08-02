import React, { Component } from 'react';

export class RegisterResponse extends Component {
    render(props) {

// const { 
//     username
// } = this.props

        return (
<tbody>
                        <tr><td>{this.props.responseData.username}</td></tr>
                          <tr><td>{this.props.responseData.email}</td></tr>
                            <tr><td>{this.props.responseData.password}</td></tr>
                             <tr><td>{this.props.responseData.username}</td></tr>


 </tbody>
        );
    }
}