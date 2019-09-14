import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, Pagination, notification } from 'antd';
import FormAddUser from './../form/formAddUser';
import FormEditUser from './../form/formEditUser';
import * as Types from './../const';
class index extends Component {
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
            formAddUser: false,
            formEditUser: false,
            dataEdit: [],
        }
    }
    openFormAddUser = () => {
        this.setState({
            formAddUser: true,
        });
    };
    onClose = () => {
        this.setState({
            formAddUser: false,
            formEditUser: false
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
            message: Types.MESSAGE_ADD_SUSCESS
        });
        this.setState({
            formAddUser: false
        })
    }
    confirmDelete = (index) => {
        // alert(id)
        var { users } = this.state;
        users.splice(index, 1);
        this.setState({
            users: users
        })
        notification.success({
            message: Types.MESSAGE_DELETE_SUSCESS
        });
    }
    editUser = (id) => {
        this.setState({
            formEditUser: true
        })
        var { users } = this.state;
        var index = users.findIndex(obj => obj.id === id);
        var dataEdit = users[index];
        this.setState(
            { dataEdit: dataEdit },
        )
    }
    newData = (values) => {
        var { users } = this.state;
        users.forEach(item => {
            if (item.id === values.id) {
                item.name = values.name
                item.phone = values.phone
                this.setState(
                    { users: users },
                )
            }
        })
        this.setState({
            formEditUser: false
        })
    }
    render() {
        return (
            <div>
                <Button type="default" style={{ margin: '0px 0px 10px 0px' }} onClick={this.openFormAddUser}><Icon type="plus" />{Types.BUTTON_ADD_TITLE}</Button>                
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
                                    <Button onClick={() => this.editUser(item.id)}>
                                        <Icon type="edit" />
                                    </Button>
                                    <Popconfirm
                                        title="Are you sure delete this task?"
                                        onConfirm={() => this.confirmDelete(index)}
                                        okText="Yes"
                                        cancelText="No"
                                        style={{ color: 'red' }}
                                    >
                                        <Button>
                                            <Icon type="delete" />
                                        </Button>
                                    </Popconfirm>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Drawer
                    title= {Types.TITLE_FORM_ADD_USER}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.formAddUser}
                    width={300}
                >
                    <FormAddUser addNewUser={this.addNewUser} />
                </Drawer>
                <Drawer
                    title= {Types.TITLE_FORM_EDIT_USER}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.formEditUser}
                    width={300}
                >
                    <FormEditUser editUser={this.state.dataEdit} newData={this.newData} />
                </Drawer>
            </div>
        );
    }
}
export default index;