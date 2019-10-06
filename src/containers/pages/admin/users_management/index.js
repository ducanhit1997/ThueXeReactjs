import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, Input, notification, Alert, Divider, Spin } from 'antd';
import { Label, Menu, Table } from 'semantic-ui-react'

import FormAddUser from './form/formAddUser';
import FormEditUser from './form/formEditUser';
import * as Types from './const';
import callApi from '../../../../utils/callApi';

// import './style.css';
const { Search } = Input;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            formAddUser: false,
            formEditUser: false,
            dataEdit: [],
            showMessageAddUser: false,
            showMessageEditUser: false,
            showMessageDeleteUser: false,
            dataFilter: '',
            loading: true,
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
        console.log( values.picture.file.name)
        console.log( values.name)

        // this.setState({ loading: 'Vui lòng đợi....' });
        const getToken = localStorage.getItem("ACCESSTOKEN");
        callApi('admin/user?token=' + getToken, 'POST', {
            name: values.name,
            email: values.email,
            password: values.password,
            picture: values.picture,
            number_phone: values.number_phone,
            address: values.address
        }).then(res => {
            var {users} = this.state;
            users.push(values)
            this.setState({ loading: false, formAddUser: false })
            notification.success({
                message: 'Thêm thành công'
            });
           
        }).catch(e => {
            console.log(e.data)
        })

    }

    confirmDelete = (id, index) => {
       
        const getToken = localStorage.getItem("ACCESSTOKEN");
        callApi('admin/user/'+id+'?token='+ getToken, 'POST', {
            _method: 'DELETE'
        }).then(res => {
            var {users} = this.state;
            users.splice(index,1);
            this.setState({users: users})
            notification.success({
                message: 'Xóa thành công'
            });
        }).catch(e => {
            // console.log(e.data)
        })
    }
    editUser = (id) => {
        alert(id)
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
    onSearch = (e) => {
        this.setState({
            dataFilter: e.target.value
        })
    }
    componentWillMount() {
        callApi('admin/user', 'GET')
            .then(res => {
                const listUser = res.data;
                console.log(listUser.users)
                this.setState({ users: listUser.users, loading: false })

            }).catch(e => {

            })
    }
    render() {

        const { users } = this.state;


        const renderListUser = users.map((item, index) => {
            return (
                <Table.Row>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.number_phone}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>
                        <Button onClick={() => this.editUser(item.id)}>
                            <Icon type="edit" theme="twoTone" />
                        </Button>
                        <Popconfirm
                            title={Types.MESSAGE_CONFIRM_DELETE}
                            onConfirm={() => this.confirmDelete(item.id, index)}
                            okText="Yes"
                            cancelText="No"
                            style={{ color: 'red' }}
                        >
                            <Button>
                                <Icon type="delete" theme="twoTone" />
                            </Button>
                        </Popconfirm>
                    </Table.Cell>
                </Table.Row>
            )
        })

        return (
            <div>
                {/* {
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
                <br /> */}
                <div>
                    <Button type="primary" style={{ margin: '0px 0px 10px 0px' }} onClick={this.openFormAddUser}><Icon type="plus-square" theme="twoTone" />{Types.BUTTON_ADD_TITLE}</Button>
                    <div style={{ float: 'right' }}>
                        <Search placeholder="Nhập để tìm kiếm" onChange={value => this.onSearch(value)} />
                    </div>
                </div>
                <Spin spinning={this.state.loading} tip="Loading...">
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>STT</Table.HeaderCell>
                                <Table.HeaderCell>Tên</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>SĐT</Table.HeaderCell>
                                <Table.HeaderCell>Địa chỉ</Table.HeaderCell>
                                <Table.HeaderCell>Thao tác</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {renderListUser}
                        </Table.Body>
                    </Table>
                </Spin>
                {/* <table class="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Email</th>
                            <th>SĐT</th>
                            <th>Địa chỉ</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody className="data-table">
                        {renderListUser}
                        {filteredData.length === 0 &&
                            <td>No data</td>
                        } 
                    </tbody>
                </table> */}
                <Drawer
                    title={Types.TITLE_FORM_ADD_USER}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.formAddUser}
                    width={300}
                >
                    <FormAddUser addNewUser={this.addNewUser} idIsExits={this.idIsExits} />
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