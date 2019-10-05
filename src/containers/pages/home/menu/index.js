import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, notification, Button, Icon } from 'antd';
import { Dropdown, Menu } from 'semantic-ui-react';
import LoginForm from './../form/formLogin';
import RegisterForm from './../form/formRegister';
import OrderForm from './../form/formOrder';
import Logo from './image/logo.png';
import callApi from '../../../../utils/callApi';



import './style.css';
const SubMenu = Menu.SubMenu;
class index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showFormLogin: false,
      showFormRegister: false,
      loading: '',
      isLogin: false,
      role: '',
      roleAdmin: false


    };
  }

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
  register = () => {
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
  Login = (email, password) => {
    this.setState({ loading: 'Vui lòng đợi....' });
    callApi('user/signin', 'POST', {
      email: email,
      password: password
    }).then(res => {
      const account = res.data;

      const token = account.token;
      const name = account.user.name;
      const role = account.user.role;
      console.log(account.user.role)
      localStorage.setItem("name", name);
      localStorage.setItem("role", role);
      
      this.setState({ isLogin: true })
      localStorage.setItem("ACCESSTOKEN", token);

      notification.success({
        message: 'Bạn đã đăng nhập thành công'
      });
      this.setState({ showFormLogin: false })

    }).catch(e => {
      this.setState({ loading: 'Sai thông tin đăng nhập!!' });
    })

  }
  Logout = () =>{
    localStorage.clear();
    notification.success({
      message: 'Bạn đã đăng xuất thành công'
    });
    window.location.reload();
  }
  render() {
    // console.log(isLogin)
    const isLogin = localStorage.getItem("ACCESSTOKEN");
    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");
    return (
      <div>
        <Menu size='tiny' >
          <Menu.Item>
            <img src={Logo} />
          </Menu.Item>
          <Menu.Menu position='right' className="menu-right">
            {(isLogin) ?
              <Dropdown item text={'Xin chào: ' + name} style={{ color: 'red' }}>
                <Dropdown.Menu onClick={this.Logout}>
                  <Dropdown.Item>Đăng xuất</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              :
              <Menu.Item>
                <Button type="primary" onClick={this.register}>Đăng nhập</Button>
              </Menu.Item>
            }
            {(role === '1') &&
              <Menu.Item>
                <Link to="/admin">Đi đến trang admin</Link>
              </Menu.Item>
            }
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
        < Modal
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
          {
            this.state.showFormRegister ?
              <RegisterForm onSubmitRegister={this.Register} showFormLogin={this.showFormRegister} /> :
              <LoginForm loading={this.state.loading} onSubmitLogin={this.Login} showFormRegister={this.showFormRegister} />
          }
        </Modal>
      </div >
    );
  }
}

export default index;