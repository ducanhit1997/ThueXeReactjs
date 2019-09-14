import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, Pagination, notification } from 'antd';
import * as Types from './const';
import TableData from './tabledata/index';
class User extends Component {
    render() {
        return (
            <div>
                <TableData/>
                <Pagination simple defaultCurrent={2} total={50} />
            </div>
        );
    }
}

export default User;