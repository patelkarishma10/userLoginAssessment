import React, { Component } from 'react';
import { Table } from "reactstrap";

import { User } from './user';

export class UserList extends Component {

    render() {

        return (
            <div className="formDiv">
                <div id="random"> </div>
                <h2>Users</h2>
                <Table className="formDiv">
                    <tbody>

                        {this.props.dataSent.map((item) => (

                            <User key={item._id}
                                
                                username={item.username} />

                        ))}

                    </tbody>
                </Table>
            </div>

        );
    }
}