import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Tag } from 'antd';
import HeaderAdmin from './header/index';
import User_Management from './users_management/index';
import './style.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class index extends Component {
    render() {
        return (
            <div>
                 <Layout>
                    <Header className="header">
                       <HeaderAdmin/>
                    </Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user" />
                                            Quản lý
                                      </span>
                                    }
                                >
                                    <Menu.Item key="1">User</Menu.Item>
                                    <Menu.Item key="2">XXX</Menu.Item>
                                    <Menu.Item key="3">YYY</Menu.Item>
                                    <Menu.Item key="4">ZZZ</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop" />
                                            subnav 2
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="notification" />
                                            subnav 3
                                         </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{ padding: '0 24px 24px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                               <User_Management/>
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default index;