import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
class formAddUser extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                this.props.Register(values)
            }
        });
    };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Mật khẩu không trùng nhau!');
        } else {
            callback();
        }
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                { required: true, message: 'Vui lòng nhập username!' },
                                { validator: this.checkUsernameExist }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Vui lòng nhập mật khẩu!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Nhập mật khẩu"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true, message: 'Vui lòng nhập mật khẩu!'
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [
                                { required: true, message: 'Vui lòng nhập email!' },
                                { validator: this.checkMailExist },
                                {
                                    type: 'email',
                                    message: 'E-mail không đúng định dạng!',
                                },

                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Vui lòng nhập firstname!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Firstname"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('lastName', {
                            rules: [{ required: true, message: 'Vui lòng nhập lastname!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Lastname"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Thêm khách hàng
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