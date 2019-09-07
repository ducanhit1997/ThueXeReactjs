import React, { Component } from 'react';
import { Icon, Drawer, Button, message } from 'antd';
import FormAddUser from './formAddUser';
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
            ],
            formAddUser: false
        }
    }
    openFormAddUser = () => {
        this.setState({
            formAddUser: true,
        });
    };
    onClose = () =>{
        this.setState({
            formAddUser: false
        })
    }
    render() {
        return (
            <div>
                <Button type="primary" style={{ margin: '0px 0px 10px 0px' }} onClick={this.openFormAddUser}><Icon type="plus" />Thêm</Button>
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
                                    <Button>
                                        <Icon type="delete" title='delete'/>
                                    </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Drawer
                    title="Thêm khách hàng"
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.formAddUser}
                    width={350}
                >
                    <FormAddUser/>
                </Drawer>
            </div>
        );
    }
}

export default User;