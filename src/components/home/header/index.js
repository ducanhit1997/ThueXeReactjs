import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
class Header extends Component {
    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div>
                <Menu
                    onClick={this.handleClick}
                    mode="horizontal"
                >
                    <Menu.Item key="mail">
                        Trang chủ
                    </Menu.Item>
                    <Menu.Item key="app">
                        Giới thiệu
                    </Menu.Item>

                    <Menu.Item key="login">
                        <Button>Đăng nhập</Button>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default Header;