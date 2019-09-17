import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, Pagination, notification, Alert } from 'antd';
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
                {
                    id: "04",
                    name: "Nguyễn Lê Phong",
                    phone: "0972541358",
                },
                {
                    id: "05",
                    name: "Nguyễn Phúc Thịnh",
                    phone: "0987124578",
                },
                {
                    id: "06",
                    name: "Nguyễn Lê Phong",
                    phone: "0972541358",
                },
                {
                    id: "07",
                    name: "Dương Hồng Hà",
                    phone: "09725413324",
                },
                {
                    id: "08",
                    name: "Phan Đức Thành",
                    phone: "4564564244",
                },
                {
                    id: "09",
                    name: "Phan Văn An",
                    phone: "09725413324",
                },
                {
                    id: "10",
                    name: "Dương Hà",
                    phone: "09725413324",
                },
                {
                    id: "12",
                    name: "Dương Hồng",
                    phone: "0972541724",
                },
               
            ],
            currentPage: 1,
            todosPerPage: 4,
            formAddUser: false,
            formEditUser: false,
            dataEdit: [],
            showMessageAddUser: false,
            showMessageEditUser: false,
            showMessageDeleteUser: false
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
        this.setState({
            formAddUser: false,
            showMessageAddUser: true
        })
        setTimeout(() => {
            this.setState({
                showMessageAddUser: false
            })
        }, 3000);
    }
    confirmDelete = (index) => {
        // alert(id)
        var { users } = this.state;
        users.splice(index, 1);
        this.setState({
            users: users,
            showMessageDeleteUser: true
        })
        setTimeout(() => {
            this.setState({
                showMessageDeleteUser: false
            })
        }, 3000);
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
            formEditUser: false,
            showMessageEditUser: true
        })
        setTimeout(() => {
            this.setState({
                showMessageEditUser: false
            })
        }, 3000);
    }
    handleClick(number) {
        // this.setState({
        //   currentPage: Number(event.target.id)
        // });
        //alert(number)
        this.setState({
            currentPage: number
        })
    }
    onChangePage = (number) => {
        //alert(number)
    }
    render() {

        const { users, currentPage, todosPerPage } = this.state;

        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = users.slice(indexOfFirstTodo, indexOfLastTodo);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(users.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
               
                <li class="page-item" key={number} onClick={() => this.handleClick(number)}>
                    <a class="page-link" href="#">
                        {number}
                    </a>
                </li>
            );
        });

        const renderListUser = currentTodos.map((item, index) => {
            return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>
                        <Button onClick={() => this.editUser(item.id)}>
                            <Icon type="edit" theme="twoTone" />
                        </Button>
                        <Popconfirm
                            title="Are you sure delete this task?"
                            onConfirm={() => this.confirmDelete(index)}
                            okText="Yes"
                            cancelText="No"
                            style={{ color: 'red' }}
                        >
                            <Button>
                                <Icon type="delete" theme="twoTone" />
                            </Button>
                        </Popconfirm>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                {
                    (this.state.showMessageAddUser) &&
                    <Alert message={Types.MESSAGE_ADD_SUSCESS} type="success" showIcon />
                }
                {
                    (this.state.showMessageEditUser) &&
                    <Alert message={Types.MESSAGE_EDIT_SUSCESS} type="success" showIcon />
                }
                {
                    (this.state.showMessageDeleteUser) &&
                    <Alert message={Types.MESSAGE_DELETE_SUSCESS} type="success" showIcon />
                }
                <br/>
                <Button type="default" style={{ margin: '0px 0px 10px 0px' }} onClick={this.openFormAddUser}><Icon type="plus-square" theme="twoTone" />{Types.BUTTON_ADD_TITLE}</Button>
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
                        {renderListUser}
                    </tbody>
                </table>
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        {renderPageNumbers}
                    </ul>
                </nav>
                {/* <Pagination defaultCurrent={1} total={users.length} onChange={this.onChangePage()} /> */}
                <Drawer
                    title={Types.TITLE_FORM_ADD_USER}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.formAddUser}
                    width={350}
                >
                    <FormAddUser addNewUser={this.addNewUser} />
                </Drawer>
                <Drawer
                    title={Types.TITLE_FORM_EDIT_USER}
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