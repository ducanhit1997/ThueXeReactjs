import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Alert } from 'antd';

import { Button, Dropdown, Menu } from 'semantic-ui-react';
import LoginForm from './../form/formLogin';
import RegisterForm from './../form/formRegister';
import './style.css';
class index extends Component {
    state = { activeItem: 'home', showFormLogin: false, showFormRegister: false }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleOk = e => {
        console.log(e);
        this.setState({
            showFormLogin: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            showFormLogin: false,
        });
    };
    register = () =>{
        this.setState({
            showFormLogin: true
        })
    }
    showFormRegister = () => {
        //console.log('registeer')
        this.setState({
            showFormRegister: !this.state.showFormRegister,
            // showFormLogin: false
        })
    }
    render() {
        const { activeItem } = this.state
        return (
            <div>
                <Menu size='tiny'>
                    {/* <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    /> */}

                    <Menu.Menu position='right' className="menu-right">
                        <Menu.Item>
                            <Button primary onClick={this.register}>Đăng nhập</Button>
                        </Menu.Item>
                        <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
                {/* Đây là trang chủ
                <br /><Link to="/admin">Đi đến trang admin</Link>
                <Button>Click Here</Button> */}
                <Modal
                    // title="LOGIN"
                    centered={true}
                    style={{ top: 20 }}
                    // visible={true}
                    visible={this.state.showFormLogin}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={'40%'}
                    height={'100%'}
                    footer={null}
                >
                    {this.state.showFormRegister ?
                        <RegisterForm onSubmitRegister={this.Register} showFormLogin={this.showFormRegister} /> :
                        <LoginForm loading={this.state.loading} onSubmitLogin={this.Login} showFormRegister={this.showFormRegister} />
                    }
                </Modal>
                <Link to="/admin">Đi đến trang admin</Link>
            </div>
        );
    }
}

export default index;