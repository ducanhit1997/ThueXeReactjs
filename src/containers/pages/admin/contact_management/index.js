import React, { Component } from 'react';
import callApi from '../../../../utils/callApi';
import { Icon, Drawer, Button, Popconfirm, Input, notification, Alert, Divider, Spin } from 'antd';
import { Table } from 'semantic-ui-react'
const { Search } = Input;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            loading: true

        }
    }
    componentWillMount() {
        callApi('admin/contact', 'GET')
            .then(res => {
                const listContact = res.data;
                console.log(listContact.contacts)

                this.setState({ contacts: listContact.contacts, loading: false })

            }).catch(e => {

            })
    }
    render() {
        const { contacts } = this.state;


        const renderlistContact = contacts.map((item, index) => {
            return (
                <Table.Row>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.number_phone}</Table.Cell>
                    <Table.Cell>{item.email}</Table.Cell>
                    <Table.Cell>{item.address}</Table.Cell>
                    <Table.Cell>{item.content}</Table.Cell>
                    <Table.Cell>{item.status}</Table.Cell>
                    <Table.Cell>
                        <Button>
                            <Icon type="edit" theme="twoTone" />
                        </Button>
                        <Popconfirm
                            // title={Types.MESSAGE_CONFIRM_DELETE}
                            // onConfirm={() => this.confirmDelete(index)}
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
                    <Button type="primary" style={{ margin: '0px 0px 10px 0px' }} ><Icon type="plus-square" theme="twoTone" />Thêm</Button>
                    <div style={{ float: 'right' }}>
                        <Search placeholder="Nhập để tìm kiếm" onChange={value => this.onSearch(value)} />
                    </div>
                </div>
                <Spin spinning={this.state.loading} tip="Loading...">
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>STT</Table.HeaderCell>
                                <Table.HeaderCell>Id</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Email</Table.HeaderCell>
                                <Table.HeaderCell>SĐT</Table.HeaderCell>
                                <Table.HeaderCell>Địa chỉ</Table.HeaderCell>
                                <Table.HeaderCell>Content</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Thao tác</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {renderlistContact}
                        </Table.Body>
                    </Table>
                </Spin>
            </div>
        );
    }
}

export default index;