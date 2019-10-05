import React, { Component, useState } from 'react';
import { Radio, Form, Select, Button } from 'antd';
import moment from 'moment-jalaali'
import DatePicker from 'react-datepicker2';

const { Option } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
class formOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: moment(),
            value2: moment()
        };
        this.disabledRanges = [
            {
                disabled: true,
                start: moment().add(-1, 'days'),
            },

        ]
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Item width={'200px'}>
                        <Radio.Group defaultValue="a" buttonStyle="solid">
                            <Radio.Button value="a">Ô tô</Radio.Button>
                            <Radio.Button value="b">Xe máy</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="Tỉnh/Thành Phố">
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Đà Nẵng</Option>
                            <Option value="lucy">TP.HCM</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Quận/Huyện">
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Hải Châu</Option>
                            <Option value="lucy">Thanh Khê</Option>
                            <Option value="Yiminghe">Sơn Trà</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Ngày nhận xe">
                        <DatePicker
                            onChange={value1 => this.setState({ value1 })}
                            value={this.state.value1}
                        />
                    </Form.Item>
                    <Form.Item label="Ngày trả xe">
                        <DatePicker
                            onChange={value2 => this.setState({ value2 })}
                            value={this.state.value2}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Tìm xe
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
// const WrappedNormalRegisterForm = Form.create({ name: 'normal_login' })(formOrder);
export default formOrder;