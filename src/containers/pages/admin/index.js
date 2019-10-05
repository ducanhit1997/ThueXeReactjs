import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb, Tag } from 'antd';
import HeaderAdmin from './header/index';
import User_Management from './users_management/';
import Question_Management from './question_management';
import Contact_Management from './contact_management';
import News_Management from './news_management';

import './style.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showListUser: true,
            showListQuestion: false,
            showListContact: false,
            showListNews: false
        }
    }
    handleClick = (e) => {
        if (e.key === 'user') {
            this.setState({
                showListUser: true,
                showListQuestion: false,
                showListNews: false,
                showListContact: false
            })
        }
        if (e.key === 'question') {
            this.setState({
                showListUser: false,
                showListNews: false,
                showListQuestion: true,
                showListContact: false
            })
        }
        if (e.key === 'contact') {
            this.setState({
                showListUser: false,
                showListQuestion: false,
                showListNews: false,
                showListContact: true
            })
        }
        if (e.key === 'news') {
            this.setState({
                showListUser: false,
                showListQuestion: false,
                showListNews: true,
                showListContact: false
            })
        }

    }
    render() {
        const { showListUser, showListQuestion, showListContact, showListNews } = this.state;
        return (
            <div>
                <Layout>
                    <Header className="header">
                        <HeaderAdmin />
                    </Header>
                    <Layout>
                        <Sider width={200}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['user']}
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
                                    onClick={this.handleClick}
                                >
                                    <Menu.Item key="user">User</Menu.Item>
                                    <Menu.Item key="question">Question</Menu.Item>
                                    <Menu.Item key="contact">Contact</Menu.Item>
                                    <Menu.Item key="news">News</Menu.Item>
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
                        <Layout style={{ padding: '0 24px 24px', fontWeight: '500' }}>
                            {
                                showListUser &&
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Quản lý user</Breadcrumb.Item>
                                </Breadcrumb>
                            }
                            {
                                showListContact &&
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Quản lý contact</Breadcrumb.Item>
                                </Breadcrumb>
                            } {
                                showListNews &&
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Quản lý tin tức</Breadcrumb.Item>
                                </Breadcrumb>
                            } {
                                showListQuestion &&
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>Quản lý câu hỏi</Breadcrumb.Item>
                                </Breadcrumb>
                            }
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                {
                                    showListUser &&
                                    <User_Management />
                                }
                                {
                                    showListQuestion &&
                                    <Question_Management />
                                }
                                {
                                    showListContact &&
                                    <Contact_Management />
                                }
                                {
                                    showListNews &&
                                    <News_Management />
                                }
                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default index;