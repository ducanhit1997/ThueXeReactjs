import React, { Component } from 'react';
import './style.css';
import icon1 from './image/icon1.png';
import icon2 from './image/icon2.png';
import icon3 from './image/icon3.png';
import icon4 from './image/icon4.png';

class Benefit extends Component {

    state = {
        listBenefit: [
            {
                image: icon1,
                title: 'Nhiều lựa chọn',
                description: 'Hàng trăm loại xe đa dạng ở nhiều địa điểm trên cả nước, phù hợp với mọi mục đích của bạn'
            },
            {
                image: icon2,
                title: 'Tin cậy, uy tín',
                description: 'Các xe đều có thời gian sử dụng dưới 3 năm và được bảo dưỡng thường xuyên'
            },
            {
                image: icon3,
                title: 'Thuận tiện',
                description: 'Dễ dàng tìm kiếm, so sánh và đặt chiếc xe như ý với chỉ vài click chuột'
            },
            {
                image: icon4,
                title: 'Hỗ trợ 24/7',
                description: 'Có nhân viên hỗ trợ khách hàng trong suốt quá trình thuê xe'
            },
        ]
    }
    render() {
        const renderListBenefit = this.state.listBenefit.map(item => {
            return (
                <div className="col-md-3">
                    <div className="otp">
                        <img src={item.image} />
                        <div className="tit">{item.title}</div>
                    </div>
                </div>
            )
        })
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="title">Lợi ích của ThueXe Pro</h3>
                        </div>
                    </div>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-md-12">
                            <div className="row">
                                {renderListBenefit}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Benefit;