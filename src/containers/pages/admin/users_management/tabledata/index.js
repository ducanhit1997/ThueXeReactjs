import React, { Component } from 'react';
import { Icon, Drawer, Button, Popconfirm, Input, notification, Alert } from 'antd';
import FormAddUser from './../form/formAddUser';
import FormEditUser from './../form/formEditUser';
import * as Types from './../const';
import './style.css';
const { Search } = Input;

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
                    name: "Sơn Tùng MTP",
                    phone: "0972541358",
                },
                {
                    id: "04",
                    name: "Hồ Quang Hiếu",
                    phone: "0972541358",
                },
                {
                    id: "05",
                    name: "Nguyễn Công Phượng",
                    phone: "0987124578",
                },
                {
                    id: "06",
                    name: "Phan Văn Đức",
                    phone: "0972541358",
                },
                {
                    id: "07",
                    name: "Quế Ngọc Hải",
                    phone: "09725413324",
                },
                {
                    id: "08",
                    name: "Lương Xuân Trường",
                    phone: "4564564244",
                },
                {
                    id: "09",
                    name: "Phạm Đức Huy",
                    phone: "09725413324",
                },
                {
                    id: "10",
                    name: "Nguyễn Quang Hải",
                    phone: "09725413324",
                },
                {
                    id: "12",
                    name: "Đặng Văn Lâm",
                    phone: "0972541724",
                },

            ],

            formAddUser: false,
            formEditUser: false,
            dataEdit: [],
            showMessageAddUser: false,
            showMessageEditUser: false,
            showMessageDeleteUser: false,
            dataFilter: ''
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
        var { users } = this.state;
        var index = users.findIndex(obj => obj.id === values.id);
        if(index){
            alert()
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
    onSearch = (e) => {
        this.setState({
            dataFilter: e.target.value
        })
    }
    render() {

        const { users, dataFilter } = this.state;

        const lowercasedFilter = dataFilter.toLowerCase();
        const filteredData = users.filter(item => {
            return Object.keys(item).some(key =>
                item[key].toLowerCase().includes(lowercasedFilter)
            );
        });

        const renderListUser = filteredData.map((item, index) => {
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
                            title={Types.MESSAGE_CONFIRM_DELETE}
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
                <br />
                <div>
                    <Button type="primary" style={{ margin: '0px 0px 10px 0px' }} onClick={this.openFormAddUser}><Icon type="plus-square" theme="twoTone" />{Types.BUTTON_ADD_TITLE}</Button>
                    <div style={{ float: 'right' }}>
                        <Search placeholder="Nhập để tìm kiếm" onChange={value => this.onSearch(value)} />
                    </div>
                </div>
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
                    <tbody className="data-table">
                        {renderListUser}
                        {filteredData.length===0&&
                            <td>No data</td>
                        }
                    </tbody>
                </table>
                <Drawer
                    title={Types.TITLE_FORM_ADD_USER}
                    placement="right"
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.formAddUser}
                    width={300}
                >
                    <FormAddUser addNewUser={this.addNewUser} idIsExits={this.idIsExits}/>
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