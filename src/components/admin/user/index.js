import React, { Component } from 'react';
import { Icon, Drawer, Button, message } from 'antd';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: "01",
                    name: "Phan Đức Anh",
                    phone: "0981878012",
                },
                {
                    id: "02",
                    name: "Nguyễn Phúc Thịnh",
                    phone: "0987124578",
                },
                {
                    id: "03",
                    name: "Nguyễn Lê Phong",
                    phone: "0972541358",
                },
            ]
        }
    }
    render() {
        return (
            <div>
                <Button type="primary" style={{ margin: '0px 0px 5px 0px' }}><Icon type="plus" />Thêm</Button>
                <table class="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>SĐT</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.users.map((item, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Button onClick={() => { this.showFormEdit(item.id) }}>
                                        <Icon type="info-circle" />
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default User;