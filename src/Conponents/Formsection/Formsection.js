import React from 'react';
import "./Formsection.css";
import { Col, Row } from 'antd';
import appointementArrow from "../../images/appointment_arrow.png";

const Formsection = () => {
    return (
        <div id='Section1'>
            <Row>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 2 }}>
                    <div className="section1-left-text">
                        <h2>
                            <strong className='text-primary-color'>Care....Love</strong> <br />
                            ....Consider.... <br />
                            Happiness at One Click !
                            <br />
                        </h2>
                        <p>
                            Avyaja team is dedicated to assist the vulnerable segment of society
                        </p>
                        <img src={appointementArrow} alt="Appointment Arrow" className='appointment_arrow_style' />
                    </div>
                </Col>
                <Col xs={{ span: 24, offset: 0 }} lg={{ span: 10, offset: 2 }}>
                    Colja ja joajaodfj
                </Col>
            </Row>
        </div>
    )
}

export default Formsection