import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, Pagination, notification } from 'antd';
import * as Types from './const';
import TableData from './tabledata/index';
class User extends Component {
    render() {
        return (
            <div>
                <TableData/>
            </div>
        );
    }
}

export default User;