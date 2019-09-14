import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom';
const { SubMenu } = Menu;
class index extends Component {
    state = {
        current: 'mail',
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render() {
        return (
            <div>
                Đây là trang chủ
                <br/><Link to="/admin">Đi đến trang admin</Link>
            </div>
        );
    }
}

export default index;