import React, { Component } from 'react';
import { Table } from "reactstrap";

import { User } from './user';

export class UserList extends Component {

    render() {

        return (
            <div className="formDiv">
                <h2>Users</h2>
                <Table >
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