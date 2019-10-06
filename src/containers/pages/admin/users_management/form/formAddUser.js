import React, { Component } from 'react';
import { Form, Icon, Input, Button, Upload } from 'antd';
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
    // checkIdExist = (rule, value, callback) => {
    //     const form = this.props.form;
    //     if (value && value == 1) {
    //         callback('Id đã tồn tại trong hệ thống!');
    //     } else {
    //         callback();
    //     }
    // };
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Mật khẩu không trùng nhau!');
        } else {
            callback();
        }
    };
    render() {
        const props = {
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange({ file, fileList }) {
                if (file.status !== 'uploading') {
                    console.log(file, fileList);
                }
            },
        };
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="login-form">
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
                        {getFieldDecorator('email', {
                            rules: [{ required: true, message: 'Vui lòng nhập email!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Nhập email"
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
                                    required: true, message: 'Vui lòng nhập lại mật khẩu!'
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
                        {getFieldDecorator('address', {
                            rules: [
                                {
                                    required: true, message: 'Vui lòng nhập địa chỉ!'
                                },
                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Nhập địa chỉ"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('number_phone', {
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
                        {getFieldDecorator('picture', {
                            rules: [
                                {
                                    required: true, message: 'Vui lòng chọn hình ảnh!'
                                },
                            ],
                        })(
                            <Upload {...props}>
                                <Button>
                                    <Icon type="upload" /> Hình ảnh
                            </Button>
                            </Upload>,
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