import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './style.css';
class formAddUser extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.addNewUser(values)
                this.props.form.resetFields()
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('id', {
                            rules: [
                                { required: true, message: 'Vui lòng nhập id!' },
                                { validator: this.checkUsernameExist }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="ID"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: 'Vui lòng nhập tên!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Nhập tên"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true, message: 'Vui lòng nhập số điện thoại!'
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Nhập số điện thoại"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            OK
                        </Button>
                    </Form.Item>
                    {/* <Form.Item>
                        <p style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}>{loading}</p>
                    </Form.Item> */}
                </Form>
            </div>
        );
    }
}
const WrappedNormalFormAddUser = Form.create({ name: 'normal_login' })(formAddUser);
export default WrappedNormalFormAddUser;