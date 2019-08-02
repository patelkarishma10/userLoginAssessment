import React, { Component } from 'react';

export class User extends Component {
    render(props) {

const { 
    username
} = this.props

        return (

                        <tr>
                            <td>{username}</td>
                        </tr>


        );
    }
}