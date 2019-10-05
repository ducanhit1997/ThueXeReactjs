import React, { Component } from 'react';
import callApi from '../../../../utils/callApi';
import { Icon, Drawer, Button, Popconfirm, Input, notification, Alert, Divider, Spin } from 'antd';
import { Table } from 'semantic-ui-react'
const { Search } = Input;

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            loading: true

        }
    }
    componentWillMount() {
        callApi('admin/question-frequent', 'GET')
            .then(res => {
                const listQuestion = res.data;
                console.log(listQuestion.users)

                this.setState({ questions: listQuestion.users, loading: false })

            }).catch(e => {

            })
    }
    render() {
        const { questions } = this.state;


        const renderListQuestion = questions.map((item, index) => {
            return (
                <Table.Row>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{item.id}</Table.Cell>
                    <Table.Cell>{item.title}</Table.Cell>
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
                                <Table.HeaderCell>Title</Table.HeaderCell>
                                <Table.HeaderCell>Content</Table.HeaderCell>
                                <Table.HeaderCell>Status</Table.HeaderCell>
                                <Table.HeaderCell>Thao tác</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {renderListQuestion}
                        </Table.Body>
                    </Table>
                </Spin>
            </div>
        );
    }
}

export default index;