import React, { Component } from 'react';
import MenuHome from './menu/index';
import Banner from './banner/Banner';
import Benefit from './benefit/Benefit';
import { Affix } from 'antd';

class Home extends Component {
    state = {
        top: 0,
      };
    render() {
        return (
            <div>
                <Affix offsetTop={this.state.top}>
                    <MenuHome />
                </Affix>
                <Banner />
                <Benefit/>
            </div>
        );
    }
}

export default Home;