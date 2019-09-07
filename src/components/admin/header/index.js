import React, { Component } from 'react';
import { Menu, Select, Badge, Avatar,Icon } from 'antd';
import { Link } from 'react-router-dom';
import './style.css';
import MenuItem from 'antd/lib/menu/MenuItem';
const { Option, OptGroup } = Select;
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
                    <SubMenu
                        title={
                            <Icon type="user" />
                        }
                    >
                        <Menu.Item key="setting:1">Xem thông tin</Menu.Item>
                        <Menu.Item key="setting:2">Đăng xuất</Menu.Item>
                    </SubMenu>
                    <MenuItem>
                        <Badge count={5}>
                            <Icon type="bell" />
                        </Badge>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default Header;