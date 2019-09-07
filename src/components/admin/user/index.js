import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, message, notification } from 'antd';
import FormAddUser from './formAddUser';
import './style.css';
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
    onClose = () => {
        this.setState({
            formAddUser: false
        })
    }
    addNewUser = (values) => {
        var newUser = {
            id: values.id,
            name: values.name,
            phone: values.phone
        }
        this.state.users.push(newUser);
        notification.success({
            message: 'Thêm thành công'
        });
        this.setState({
            formAddUser: false
        })
    }
     confirmDelete = (index) => { 
       // alert(id)
        var { users } = this.state;
        users.splice(index,1);
        this.setState({
            users: users
        })
        notification.success({
            message: 'Xóa thành công'
        });
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
                                    <Popconfirm
                                        title="Are you sure delete this task?"
                                        onConfirm={()=>this.confirmDelete(index)}
                                        okText="Yes"
                                        cancelText="No"
                                        style={{ color: 'red' }}
                                    >
                                        <Button>
                                            <Icon type="delete" title='delete' />
                                        </Button>
                                    </Popconfirm>
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
                    <FormAddUser addNewUser={this.addNewUser} />
                </Drawer>
            </div>
        );
    }
}

export default User;